"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_1 = require("../pages/loginPage");
const queryPage_1 = require("../pages/queryPage");
const config_1 = require("../config/config");
const { When, Then, Given, TableDefinition, setDefaultTimeout } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;
const login = new loginPage_1.LoginPageObject();
const query = new queryPage_1.QueryPageObject();
setDefaultTimeout(60 * 1000);
Given(/^User is on the Browser$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.manage().window().maximize();
    yield protractor_1.browser.getTitle().then(txt => expect(txt).to.be.equal('CAT'));
}));
When(/^User inputs URL and launch the thesyscat login screen$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.driver.get(config_1.config.baseUrl);
    yield protractor_1.browser.getTitle().then(txt => expect(txt).to.be.equal('CAT'));
}));
Then(/^User is on the Thesys CAT Login Page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield login.loginPageText.getText().then(txt => expect(txt).to.include('Enter Login Credentials'));
}));
When(/^User Validates the UI Field Labels (.*)$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield login.loginPageText.getText().then(txt => console.log('=> Going to Assert Next Label', text));
}));
Then(/^All the UI field labels should match the Requirment Screen Mockup Labels (.*)$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield login.loginPageText.getText().then(txt => {
        const res = txt.split('\n').filter(value => Object.keys(value).length !== 0);
        assert.includeMembers(res, [text], 'not include ordered members');
    });
}));
When(/^User inputs invalid credentials for (.*) and (.*) fields$/, (Username, Password) => __awaiter(this, void 0, void 0, function* () {
    yield login.usernameInput.clear();
    yield login.usernameInput.sendKeys(Username);
    yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.TAB).perform();
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
    yield login.passwordInput.clear();
    yield login.passwordInput.sendKeys(Password);
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.driver.sleep(3000);
    yield protractor_1.browser.waitForAngular();
    yield login.btnLogin.click().then(function () {
        console.log("===========> going to read validation message");
    });
}));
Then(/^User should see the appropriate error messages (.*) and (.*)$/, (Error_Message_Username, Error_Message_Password) => __awaiter(this, void 0, void 0, function* () {
    let errorMsgArray = [Error_Message_Username, Error_Message_Password].filter(value => Object.keys(value).length !== 0);
    // console.log("------------------------>error msg", errorMsgArray, login.errorMsg.getText().then(txt => console.log(txt)));
    yield login.errorMsg.getText().then(txt => expect(txt).to.include.members(errorMsgArray));
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
}));
When(/^User enters the different combinations of invalid credentials (.*) and (.*)$/, (Username, Password) => __awaiter(this, void 0, void 0, function* () {
    yield login.usernameInput.clear();
    yield login.usernameInput.sendKeys(Username);
    yield login.passwordInput.clear();
    yield login.passwordInput.sendKeys(Password);
}));
When(/^User clicks on LOGIN button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield login.btnLogin.click().then(function () {
        console.log("===========> going to read validation message");
    });
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.driver.sleep(2000);
    yield protractor_1.browser.waitForAngular();
}));
Then(/^User should see the appropriate error message (.*)$/, (Error_Message) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
    yield login.formLoginErr.getText().then(txt => expect(txt).to.be.equal(Error_Message));
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
}));
When(/^User enters valid credentials (.*) and (.*)$/, (Username, Password) => __awaiter(this, void 0, void 0, function* () {
    yield login.usernameInput.clear();
    yield login.usernameInput.sendKeys(Username);
    yield login.passwordInput.clear();
    yield login.passwordInput.sendKeys(Password);
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
}));
Then(/^User successfully logged in to the Administrator Portal and sees the (.*)$/, (Message) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
    yield protractor_1.browser.getTitle().then(txt => expect(txt).to.be.equal("Admin Portal"));
    yield login.consolidatedMsg.getText().then(txt => expect(txt).to.be.equal(Message));
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
}));
Given(/^User is on the Thesys CAT Home Page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.getTitle().then(txt => expect(txt).to.be.equal("Admin Portal"));
}));
When(/^User clicks Logout button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield login.arrowIconToLogout.click();
    yield protractor_1.browser.driver.sleep(2000);
    yield protractor_1.browser.waitForAngular();
    yield login.logoutBtn.click();
}));
Then(/^User successfully logs out of the Thesys CAT Application$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(10000);
    yield protractor_1.browser.waitForAngular();
    yield login.loginPageText.getText().then(txt => expect(txt).to.include('Enter Login Credentials'));
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
}));
When(/^User hits on ENTER Key$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
}));
// here is final login test scenario
When(/^User inputs valid user (.*)$/, (Username) => __awaiter(this, void 0, void 0, function* () {
    yield login.usernameInput.clear();
    yield login.usernameInput.sendKeys(Username);
    // await login.usernameInput.sendKeys('test_all@test.com');
}));
Then(/^User inputs valid pass (.*)$/, (Password) => __awaiter(this, void 0, void 0, function* () {
    yield login.passwordInput.clear();
    yield login.passwordInput.sendKeys(Password);
    //await login.passwordInput.sendKeys('#Wbv27HXPzU@3rB97g0^');
}));
Then(/^User Clicks on Login Button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield login.btnLogin.click().then(function () {
        console.log("===========> new page loaded after click on login");
    });
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
}));
Then(/^User Will be On Admin Portal Page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5000);
    yield protractor_1.browser.waitForAngular();
    yield protractor_1.browser.getTitle().then(txt => expect(txt).to.be.equal("Admin Portal"));
    yield console.log("==> On Admin Portal Page");
}));
