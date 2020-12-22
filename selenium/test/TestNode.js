const { Builder, By, Key, until } = require('selenium-webdriver');
const rp = require('request-promise-native');
let username = 'bdosiak@peeklogic.com';
let authkey = 'ud54b6c654941325';
let auth = { username: username, password: authkey };
let hubUrl = 'https://' + username + ':' + authkey + '@hub.crossbrowsertesting.com:443/wd/hub';
let apiUrl = 'https://crossbrowsertesting.com/api/v3/selenium/';
let caps = { name: 'NodeJS Test11111', browserName: 'Chrome', platform: 'Windows 10', recordVideo: true };
async function example() {
	return new Promise(async function(resolve, reject) {
		console.log('EXAMPLE');
		let driver = await new Builder().usingServer(hubUrl).withCapabilities(caps).build();
		var sessionId = null;
        var score = 'fail';

		try {
			await driver.get('http://crossbrowsertesting.github.io/todo-app.html');
			var session = await driver.getSession();
			sessionId = session.id_;
			var results = await getTestInfo(sessionId);
			await driver.findElement(By.name('todo-4')).click();
			await driver.findElement(By.name('todo-5')).click();
			await takeSnapshot(sessionId);
			await driver.findElement(By.id('todotext')).sendKeys('Run your first Selenium Test');
			await driver.findElement(By.linkText('archive')).click();
			await takeSnapshot(sessionId);
			var elems = await driver.findElements(By.className('ng-pristine'));
			if (elems.length === 3) {
				score = 'pass';
			}
			await console.log('See your test run on ' + results.show_result_public_url);
		} catch (e) {
			console.log('Test Error: ', e);
			reject(e);
		} finally {
			let rest = await setScore(sessionId, score);
			await getTestInfo(sessionId);
			await driver.quit();
			resolve(rest);
        }

	});
}
async function getTestInfo(sessionId) {
	var options = { method: 'GET', uri: apiUrl + sessionId, json: true, auth: auth };
	return await rp(options);
}
async function setScore(sessionId, score) {
	var options = {
		method: 'PUT',
		uri: apiUrl + sessionId,
		json: true,
		body: { action: 'set_score', score: score },
		auth: auth
	};
	return await rp(options);
}
async function takeSnapshot(sessionId) {
	var options = { method: 'POST', uri: apiUrl + sessionId + '/snapshots', json: true, auth: auth };
	return await rp(options);
}
module.exports.example = example;
