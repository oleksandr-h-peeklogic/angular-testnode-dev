var express = require('express');
var router = express.Router();
var status = require('http-status');

const SF_USERNAME = 'ibegei@peeklogic.com.aqa';
const SF_PASSWORD = 'Veryeasy4473';
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
		conn.login(SF_USERNAME, SF_PASSWORD, function(err, userInfo) {
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
		conn.login(SF_USERNAME, SF_PASSWORD, function(err, userInfo) {
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
		conn.login(SF_USERNAME, SF_PASSWORD, function(err, userInfo) {
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
		conn.login(SF_USERNAME, SF_PASSWORD, function(err, userInfo) {
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
		conn.login(SF_USERNAME, SF_PASSWORD, function(err, userInfo) {
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
		var files = req.body;
		console.log('FILES', files);
		testFiles(files, 0)
			.then((respp) => {
				console.log('RES', respp);
				res.send(200);
			})
			.catch((errr) => {
				console.log('ERRRROOORRR', errr);
				res.status(400);
			});

		async function testFiles(files, index) {
			return new Promise((resolve, reject) => {
				let FILENAME = `../selenium/test/${files[index].fileName}`;
				let fileBody = files[index].body;
				fs
					.outputFile(FILENAME, fileBody)
					.then(() => {
						console.log('SAVED');
						try {
							delete require.cache[require.resolve(FILENAME)];
						} catch (e) {}
						console.log('SAVED 1');
						test = require(FILENAME);
						console.log('SAVED 2');
						test
							.example()
							.then((ewq) => {
								console.log('SUCCESS ewq', ewq);
								if (index === files.length - 1) {
									resolve('DONE');
								}
								else {
									testFiles(files, index + 1)
										.then((responce) => {
											resolve(responce);
										})
										.catch((err) => {
											reject(err);
										});
								}
							})
							.catch((rree) => {
								if (rree) {
									console.error('ERROR rree', rree);
								}
							});
					})
					.catch((er) => {
						if (er) {
							console.error('CREATED FILE ERROR', er);
						}
					});
			});
			//let FILENAME = './selenium/test/myfirsttest1.js';
		}
	}
};
