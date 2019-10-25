import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Test } from './Models/Test';


@Injectable()
export class TestService {

  private testsUrl = '/api/tests';
  private testUrl = '/api/test';
  private testRunUrl = '/api/runtests';
  private browsersUrl = 'https://crossbrowsertesting.com/api/v3/selenium/browsers';
  private testRun = '/api/testRun';
  


  constructor (private http: Http) {

  }

  
  getBrowsers(){

    return this.http.get(this.browsersUrl)
    .toPromise()
    .then(response => {
      return response.json()
    })
    .catch(this.handleError);
  }

    getTests(ID : string){
      console.log('TEST SERVICE',ID);

      return this.http.get(this.testsUrl+'?objId='+ID)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
    }

    getTestRun(ID : string){
      console.log('TEST SERVICE',ID);
      return this.http.get(this.testRun+'?objId='+ID)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
    }

    saveTestRun(testRun : Object){
      return this.http.post(this.testRun,testRun)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
    }

    getTest(ID : string){
      console.log('TEST SERVICE',ID);
      return this.http.get(this.testUrl+'?objId='+ID)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
    }
    saveTest(test : Object){
      console.log('TEST OBJECT',test);
      return this.http.post(this.testUrl,test)
      .toPromise()
      .then(response => {
        console.log('SAVED TEST AND TEST RUN',response.json());
        return response.json()
      })
      .catch(this.handleError);
    }

    runTest(test : any[]){
      console.log('TEST RUN',test);
      return this.http.post(this.testRunUrl,test).
        toPromise().
        then((respp) =>{
          console.log('RESPONCE',respp);
        }).catch((err) => {
          console.error('ERROR',err);
        })
    }
    // put("/api/contacts/:id")
    // updateContact(putContact: Contact): Promise<Contact> {
    //   var putUrl = this.contactsUrl + '/' + putContact._id;
    //   return this.http.put(putUrl, putContact)
    //              .toPromise()
    //              .then(response => response.json() as Contact)
    //              .catch(this.handleError);
    // }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}
