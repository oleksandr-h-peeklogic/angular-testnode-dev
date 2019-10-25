import { Component, ViewChild, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TestService } from '../test.service';
import {Test} from '../Models/Test';
import 'brace';
import 'brace/mode/sql';
import 'brace/theme/dracula';
var id = '';
var browsers;
@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls:
		[
			'./test.component.css'
		],
	providers:
		[
			TestService
		]
})
export class TestComponent {
	editorOptions = {theme: 'vs-dark', language: 'javascript'};
  	code: string= 'function x() {\nconsole.log("Hello world!");\n}';
	saved = false;
	testArr = [];
  currentTest;
  OS = '';
	OStypes = new Set();
	OSversions = [];
	OSVersion;
	browser;
	resolution;
	startTest = '';
  endTest = '';
  testRun;
  savedMessage = '';
  currentTestName = '';
  url = '';
  accKey = '';
  sfUrl = '';

	constructor(private route: ActivatedRoute, private location: Location, private testService: TestService) {
		this.testService.getBrowsers().then((res) => {
			browsers = res;
			id = this.route.snapshot.paramMap.get('id');
			this.url = this.route.snapshot.paramMap.get('url');
			this.accKey = this.route.snapshot.paramMap.get('accKey');
			this.sfUrl = `https://${this.url}/secur/frontdoor.jsp?sid=${this.accKey}&retURL=lightning/page/home`;
			browsers = browsers.filter((el) => el.device === 'desktop');
			browsers.forEach((el) => {
				this.OStypes.add(el.type);
			});
			})		
		this.getTestRun(id);
		this.getTests(id);
	}
	//@ViewChild('editor') editor;
	//@ViewChild('editor2') editor2;
	//text: string = "";
	text2 = '';
	private _text: string;
	stateChanged: EventEmitter<string> = new EventEmitter();

	set text(val: string) {
		this._text = val;
		this.text2 = `${this.startTest}
          ${val}              
    ${this.endTest}`;
		//this.stateChanged.emit(this._text);
	}

	get text(): string {
		return this._text;
	}

	// stateChangedEmitter() {
	//   return this.stateChanged;
	// }
	options: any = { maxLines: 1000, printMargin: false };

	onChange(code) {}

	fileNameChange(newValue) {
		this.currentTest.flosum_qa__File_Name__c = newValue;
	}

	testNameChange(newValue) {
		this.currentTest.Name = newValue;
	}

	saveTest() {
    this.currentTest.flosum_qa__selenium_webdriver_JS__c =this.text;
    let testObj = {
      "test":this.currentTest,
      "testRunId": id
    }
		this.testService
			.saveTest(testObj)
			.then((respp) => {
        console.log('RESPPPP', respp);
        this.getTests(id);
        this.savedMessage = 'Test successfully saved!';
				this.saved = true;
				setTimeout(() => {
          this.saved = false;
          this.savedMessage = '';
				}, 3000);
			})
			.catch((er) => {
				console.error('ERRRR', er);
			});
  }
  
  getTests(id){
    this.testService.getTests(id).then((ress) => {
			let aaa = [];
			ress.forEach((element) => {
				aaa.push({
					value: element.flosum_qa__Test__c,
					test: element.Name + ' - ' + element.flosum_qa__Test__r.Name
				});
			});
			this.testArr = aaa;
		});
  }

	changeTEst(value) {
		console.log('VALUE', value);
		if (value === 'Choose...') {
			this.currentTest = undefined;
		}
		else {
			this.testService
				.getTest(value)
				.then((resp) => {
					console.log('RESPP', resp);
					this.currentTest = resp[0];
					//this.startTest = this.currentTest.flosum_qa__selenium_webdriver_JS__c.split('//!-Start test -!')[0];
					//this.endTest = this.currentTest.flosum_qa__selenium_webdriver_JS__c.split('//!-End test -!')[1];
					this.text = this.currentTest.flosum_qa__selenium_webdriver_JS__c;
				})
				.catch((err) => {
					if (err) {
						console.error('ERROR1111111111111', err);
					}
				});
		}
	}

	runTest() {
		let testArr = [];
		testArr.push({
			fileName: this.currentTest.flosum_qa__File_Name__c,
			body: this.startTest + this.text + this.endTest,
			queue: 1
		});
		this.testService.runTest(testArr);
	}

	findOSVersions(val) {
		if (val != 'Choose...') {
			this.OSversions = browsers.filter((el) => el.type === val);
		}
		else {
			this.OSversions = [];
		}
  }
  
  getTestRun(id){
    this.testService
			.getTestRun(id)
			.then((resp) => {
        console.log('TEST RUN', resp);
        this.testRun = resp[0];
				this.startTest = this.testRun.flosum_qa__Start__c.split('<br>').join('\n').split('&#39;').join("'");
        this.endTest = this.testRun.flosum_qa__End__c.split('<br>').join('\n').split('&#39;').join("'");
        if(this.testRun.flosum_qa__Platform__c.includes('Windows')){
          this.OS = 'Windows';          
        }else if(this.testRun.flosum_qa__Platform__c.includes('Mac')){
          this.OS = 'Mac';          
        }else if(this.testRun.flosum_qa__Platform__c.includes('Ubuntu')){
          this.OS = 'Ubuntu';
        }else{
          this.OS = '';
        }
        console.log('this.OS',this.OS);
        this.findOSVersions(this.OS);
        console.log('this.OSversions',this.OSversions);
          this.OSVersion = this.OSversions.find((el) => el.version === this.testRun.flosum_qa__Platform__c);
          console.log('this.OSVersion',this.OSVersion);
          if(this.OSVersion != undefined){
            this.browser = this.OSVersion.browsers.find((el) => el.caps.browserName === this.testRun.flosum_qa__Browser_Name__c && el.caps.version === this.testRun.flosum_qa__Version__c);
            this.resolution = this.OSVersion.resolutions.find((el) => el.name === this.testRun.flosum_qa__Screen_resolution__c);
          }
          let fakeTest = this.text;
        this.text = fakeTest;
			})
			.catch((err) => {
				console.error('ERROR', err);
			});
  }

  createNewTest(){
    this.currentTest = new Test();
    this.text = '';
    this.currentTestName = 'Choose...';
  }

	findBrowsers() {
		console.log('findBrowsers', this.OSVersion);
	}
	selectBrowser() {
		console.log('this.browser', this.browser);
	}
	selectResolutions() {
		console.log('this.resolution', this.resolution);
  }
  
  saveTestRun(){
    this.testRun.flosum_qa__Platform__c = this.OSVersion.caps.platform;
    this.testRun.flosum_qa__Browser_Name__c = this.browser.caps.browserName;
    this.testRun.flosum_qa__Version__c = this.browser.caps.version;
    this.testRun.flosum_qa__Screen_resolution__c = this.resolution.caps.screenResolution;    
    console.log('this.testRun.flosum_qa__Version__c',this.testRun);
    this.testService.saveTestRun(this.testRun).then((respp) => {
      console.log('RESP RESP RESP RESP',respp);
      this.savedMessage = 'Test Run successfully saved!';
				this.saved = true;
				setTimeout(() => {
          this.saved = false;
          this.savedMessage = '';
				}, 3000);
      this.getTestRun(respp.id);
    }).catch((ERR) => {
      console.error('ERRRRRRRRR',ERR);
    });
  }
}
