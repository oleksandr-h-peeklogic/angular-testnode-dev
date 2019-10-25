var express = require('express');
var router = express.Router();
var status = require('http-status');


const os = require('os');
const fs = require('fs-extra');
var jsforce = require('jsforce');
var conn = new jsforce.Connection({
	// you can change loginUrl to connect to sandbox or prerelease env.
	loginUrl: 'https://login.salesforce.com'
});

let crypto;
try {
	crypto = require('crypto');
} catch (err) {
	console.log('crypto support is disabled!');
}

module.exports = {
	testTestCrypto: function(req, res) {
		res.status(201).json({ e: encrypted, d: decrypted.split(',') });
	},
	getTestRun: function(req, res) {
		console.log('req.body.TESTRUN', req.query.objId);
		conn.login(process.env.username, process.env.password, function(err, userInfo) {
			if (err) {
				return console.error(err);
			}
			conn
				.sobject('flosum_qa__Selenium_Test_Run__c')
				.find({ Id: req.query.objId },'Id,flosum_qa__Browser_Name__c,flosum_qa__Build__c,flosum_qa__End__c,flosum_qa__Platform__c,flosum_qa__Record_network__c,flosum_qa__Record_video__c,flosum_qa__Screen_resolution__c,flosum_qa__Start__c,flosum_qa__Version__c')
				.execute(function(err, records) {
					if (err) {
						return console.error(err);
					}
					res.status(200).json(records);
				});
		});
  },
  saveTestRun: function(req, res) {
    let testRun = req.body;
    delete testRun.flosum_qa__Start__c;
    delete testRun.flosum_qa__End__c;
		conn.login(process.env.username, process.env.password, function(err, userInfo) {
			if (err) {
				return console.error(err);
			}
			conn
				.sobject('flosum_qa__Selenium_Test_Run__c')
				.update(testRun,function(err,rets){
          if(err){
            console.error('ERROR',err);
          }else{
            //console.log('TEST RUN UPDATE',rets);
            res.status(201).json(rets);
          }
        })
		});
	},
	getTests: function(req, res) {
		console.log('req.body', req.query.objId);
		conn.login(process.env.username, process.env.password, function(err, userInfo) {
			if (err) {
				return console.error(err);
			}
			conn
				.sobject('flosum_qa__Selenium_Test_Suite__c')
				.find(
					{ flosum_qa__Selenium_Test_Run__c: req.query.objId },
					'flosum_qa__Test__r.Name,flosum_qa__Selenium_Test_Run__c,flosum_qa__Test__c,Id,Name'
				)
				.execute(function(err, records) {
					if (err) {
						return console.error(err);
					}
					res.status(200).json(records);
				});
		});
	},
	getTest: function(req, res) {
		console.log('req.body', req.query.objId);
		conn.login(process.env.username, process.env.password, function(err, userInfo) {
			if (err) {
				return console.error(err);
			}
			console.log(conn.accessToken);
			conn
				.sobject('flosum_qa__Test__c ')
				.find(
					{ Id: req.query.objId },
					'flosum_qa__File_Name__c,flosum_qa__isActive__c,flosum_qa__selenium_webdriver_JS__c,Id,Name'
				)
				.limit(1)
				.execute(function(err, records) {
					if (err) {
						return console.error(err);
					}
					res.status(200).json(records);
				});
		});
	},
	saveTest: function(req, res) {
		let test = req.body;
    delete test.attributes;
		console.log('TEST testToUpdate', test);
		conn.login(process.env.username, process.env.password, function(err, userInfo) {
			if (err) {
				return console.error(err);
			}
			console.log(conn.accessToken);
			console.log(conn.instanceUrl);
			console.log('User ID: ' + userInfo.id);
      console.log('Org ID: ' + userInfo.organizationId);
      if(test.test.Id != undefined){
        conn.sobject('flosum_qa__Test__c').update([
          test.test
        ], function(err, rets) {
          if (err) {
            return console.error(err);
          }
          res.status(201).json(rets);
        });  
      }else{
        conn.sobject('flosum_qa__Test__c').insert(
          test.test
        , function(err, rets) {
          if (err) {
            return console.error(err);
          }else{
            console.log('RETS',rets);
            conn.sobject('flosum_qa__Selenium_Test_Suite__c').insert({
              "flosum_qa__Test__c" : rets.id,
              "flosum_qa__Selenium_Test_Run__c": test.testRunId
            }, function(err2, rets2) {
              if (err2) {
                return console.error(err);
              }
              res.status(201).json(rets2);
            });
          }
        });
      }
			
		});
	},
	runtests: async function(req, res) {
		
		console.log('in runtest', req.body);
		function testResponces(responce){
			var objects = [];
			var i =0;
			responce.forEach(function(resp){
			console.log('resp.testId',resp.testId);
			console.log('resp.result',resp.result.state);
			var tempObject = new Object();
				tempObject.flosum_qa__Test__c =resp.testId;
				tempObject.flosum_qa__Selenium_Test_Run_Result__c =resp.testRunResId;
				tempObject.flosum_qa__Selenium_Test_Suite__c=resp.testSuiteId;
				tempObject.flosum_qa__TestInfo__c =JSON.stringify(resp.result);
				tempObject.flosum_qa__Result_Public_URL__c =resp.result.show_result_public_url;
				tempObject.flosum_qa__selenium_test_id__c =resp.result.selenium_test_id.toString();
				tempObject.flosum_qa__State__c =resp.result.state;
				objects.push(tempObject);
				i++;
			});
			console.log('in object array ==> ', objects);
			console.log(responce.length);
			console.log(i);
			if(responce.length == i){
			//conn.login(process.env.username, process.env.password, function(err, res) {
				conn.login(process.env.username, process.env.password, function(err, res) {
				var accesTok = conn.accessToken;
				conn.sobject("flosum_qa__Test_Result__c").create(objects,
				function(err, rets) {
					if (err) { return console.error(err); }else{
						console.log('pushed, check SF');
					}
				
				});
				
			});
			}
			}
	
		var receive = req.body;
		receive.forEach(function(testObjSF,inn,arr){
			console.log('testObjSF',testObjSF);

			 for(var mName in testObjSF){
				 console.log('map key --> ',mName);
				 for (let value of Object.values(testObjSF)) {
					console.log('===========================================================================');   
			 var files = value;    //go error;
			 console.log('FILES',files);
		 testFiles(files,0).then((respp) => {  
			 console.log('RES', respp);
		 }).catch((errr) => {
			 console.log('ERRRROOORRR',errr);
		 }) 
		
		 }
		 }
		
		});
		var collectResponces = [];
		var isLocalTest = new Boolean(false);
			async function testFiles(files,index){
			
				return new Promise((resolve,reject) => {
				//	console.log('__dirname',__dirname);
					//let FILENAME = os.tmpdir()+`/selenium/test/${files[index].fileName}`; 
					let FILENAME = `/app/selenium/test/${files[index].fileName}`; 
					if(FILENAME.includes('local-test-try')){
						isLocalTest = true;
					}
				//	let FILENAME = `./selenium/test/TestNode.js`; 
					console.log('FILENAME',FILENAME); 
						let fileBody = files[index].body.split('<br>').join('\n').split('&#39;').join('\''); 
						fs.outputFile(FILENAME,fileBody).then(() =>{ 
							delete require.cache[require.resolve(FILENAME)]
							test = require(FILENAME);
							test.example().then((ewq) => {
								console.log('SUCCESS ewq');
								var tempObj = new Object();
								tempObj.testId = files[index].testId;
								tempObj.testRunResId = files[index].testRunResId;
								tempObj.testSuiteId = files[index].testSuiteId;
								tempObj.result = ewq;
								console.log('tempObj.testSuiteId ',tempObj.testSuiteId );
								if(tempObj.testSuiteId === null || tempObj.testSuiteId === undefined){
									res.send(ewq);
								}else{
									res.sendStatus(200); 
									collectResponces.push(tempObj);
								}
								
								if(index === files.length - 1){
									if(tempObj.testSuiteId === null || tempObj.testSuiteId === undefined){
										console.log('just check test');
									}else{

										testResponces(collectResponces);
									resolve('FIN');
									}
								}else{
									testFiles(files,index+1).then((responce) => {
										resolve(responce);
									}).catch((err) => {
										reject(err);
									});
								}
							}).catch((rree) => {
								if(rree){
									console.error('ERROR rree',rree);
								}
							})
						}).catch((er) => {
							if(er){
								console.error('CREATED FILE ERROR',er);


								//let FILENAME2 = `/app/selenium/test/TestNode.js`; 
		
							}
						})
				})
			}
			if(!isLocalTest){
				console.log('not LOCAL');
				//res.sendStatus(200);  
			}
		//	
		

	}
};
