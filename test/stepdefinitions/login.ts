import { browser, protractor } from "protractor";
import { LoginPageObject } from "../pages/loginPage";
import { QueryPageObject } from "../pages/queryPage";
import { config } from "../config/config";
import { TableDefinition } from "cucumber";
const { When, Then, Given, TableDefinition, setDefaultTimeout} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;
const login: LoginPageObject = new LoginPageObject();
const query: QueryPageObject = new QueryPageObject();

setDefaultTimeout(60 * 1000);

Given(/^User is on the Browser$/, async () => {
    await browser.manage().window().maximize();
    await browser.getTitle().then(txt => expect(txt).to.be.equal('CAT'));
});

When(/^User inputs URL and launch the thesyscat login screen$/, async () => {
      await browser.driver.get(config.baseUrl);
      await browser.getTitle().then(txt => expect(txt).to.be.equal('CAT'));
});

Then(/^User is on the Thesys CAT Login Page$/, async () => {
    await login.loginPageText.getText().then(txt => expect(txt).to.include('Enter Login Credentials'));
});

When(/^User Validates the UI Field Labels (.*)$/, async (text) => {
    await login.loginPageText.getText().then(txt => console.log('=> Going to Assert Next Label' , text));
});

Then(/^All the UI field labels should match the Requirment Screen Mockup Labels (.*)$/, async (text) => {
     await login.loginPageText.getText().then(txt => { 
         const res = txt.split('\n').filter(value => Object.keys(value).length !== 0);
         assert.includeMembers( res , [ text ], 'not include ordered members');
        });
});

When(/^User inputs invalid credentials for (.*) and (.*) fields$/, async(Username, Password) => {     
    await login.usernameInput.clear();
    await login.usernameInput.sendKeys(Username);
    await browser.actions().sendKeys(protractor.Key.TAB).perform();
    await browser.sleep(5000);
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
    await login.passwordInput.clear();
    await login.passwordInput.sendKeys(Password);
    await browser.sleep(5000);
    await browser.driver.sleep(3000);
    await browser.waitForAngular();
    await login.btnLogin.click().then(function() {
        console.log("===========> going to read validation message");
      }); 
 });

Then(/^User should see the appropriate error messages (.*) and (.*)$/, async(Error_Message_Username, Error_Message_Password) => {
    let errorMsgArray = [Error_Message_Username, Error_Message_Password].filter(value => Object.keys(value).length !== 0);
   // console.log("------------------------>error msg", errorMsgArray, login.errorMsg.getText().then(txt => console.log(txt)));
   await login.errorMsg.getText().then(txt => expect(txt).to.include.members(errorMsgArray));
   await browser.sleep(5000);
   await browser.driver.sleep(5000);
   await browser.waitForAngular();
});

When(/^User enters the different combinations of invalid credentials (.*) and (.*)$/, async (Username, Password) => {
    await login.usernameInput.clear();
    await login.usernameInput.sendKeys(Username);
    await login.passwordInput.clear();
    await login.passwordInput.sendKeys(Password);
});

When(/^User clicks on LOGIN button$/, async( ) => {
    await login.btnLogin.click().then(function() {
        console.log("===========> going to read validation message");
    });
    await browser.sleep(2000);
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
});

Then(/^User should see the appropriate error message (.*)$/, async (Error_Message) => {
    await browser.sleep(2000);
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
    await login.formLoginErr.getText().then(txt => expect(txt).to.be.equal(Error_Message));
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
});

When(/^User enters valid credentials (.*) and (.*)$/, async (Username, Password) => {
    await login.usernameInput.clear();
    await login.usernameInput.sendKeys(Username);
    await login.passwordInput.clear();
    await login.passwordInput.sendKeys(Password);
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
});

Then(/^User successfully logged in to the Administrator Portal and sees the (.*)$/, async (Message) => {
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
    await browser.getTitle().then(txt => expect(txt).to.be.equal("Admin Portal"));
    await login.consolidatedMsg.getText().then(txt => expect(txt).to.be.equal(Message));
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
});

Given(/^User is on the Thesys CAT Home Page$/, async () => {
    await browser.getTitle().then(txt => expect(txt).to.be.equal("Admin Portal"));
});

When(/^User clicks Logout button$/, async () => {
    await login.arrowIconToLogout.click();
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    await login.logoutBtn.click();
});

Then(/^User successfully logs out of the Thesys CAT Application$/, async () => {
    await browser.driver.sleep(10000);
    await browser.waitForAngular();
    await login.loginPageText.getText().then(txt => expect(txt).to.include('Enter Login Credentials'));
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
});

When(/^User hits on ENTER Key$/, async( ) => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

// here is final login test scenario
When(/^User inputs valid user (.*)$/, async (Username) => {
    await login.usernameInput.clear();
    await login.usernameInput.sendKeys(Username);
    // await login.usernameInput.sendKeys('test_all@test.com');
    
});

Then(/^User inputs valid pass (.*)$/, async (Password) => {
    await login.passwordInput.clear();
    await login.passwordInput.sendKeys(Password);
    //await login.passwordInput.sendKeys('#Wbv27HXPzU@3rB97g0^');
});

Then(/^User Clicks on Login Button$/, async () => {
    await login.btnLogin.click().then(function() {
        console.log("===========> new page loaded after click on login");
      }); 
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
});

Then(/^User Will be On Admin Portal Page$/, async () => {
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
    await browser.getTitle().then(txt => expect(txt).to.be.equal("Admin Portal"));
    await console.log("==> On Admin Portal Page");
});

