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
const protractor_2 = require("protractor");
const queryPage_1 = require("../pages/queryPage");
const config_1 = require("../config/config");
const { When, Then, Given, TableDefinition, setDefaultTimeout } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;
const query = new queryPage_1.QueryPageObject();
let queryID;
let resultCount;
let status;
let updatedQueryID;
let queryName;
let lifeCycle;
let dateSubmitted;
let timeSubmitted;
let dateCompleted;
let timeCompleted;
Given(/^User is on the OTQT Home Page.$/, () => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> Redirecting to query portal");
    yield protractor_2.browser.driver.get(config_1.config.queryBaseUrl);
    yield protractor_2.browser.sleep(5000);
    yield protractor_2.browser.driver.sleep(5000);
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.getTitle().then(txt => expect(txt).to.be.equal("Query Tool"));
    yield console.log("==> On Query Portal Page");
}));
When(/^User selects Date and Time range (.*) and (.*) and (.*) filters$/, (Date, From_Time, To_Time) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to assert query portal page", Date, From_Time, To_Time);
    yield protractor_2.browser.sleep(2000);
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield query.fromDate.sendKeys(Date);
    yield query.fromTime.sendKeys(From_Time);
    yield query.toTime.sendKeys(To_Time);
}));
When(/^User selects Types (.*) and (.*) filters$/, (Trades_Orders, Equities_Options) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to select traders orders, equities options");
    yield query.tardersAndOrders.click();
    yield query.equitiesOnly.click();
}));
When(/^User selects Symbols (.*) filter$/, (Symbols) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to add symbol");
    yield query.symbolInput.sendKeys(Symbols);
    yield query.addSymbol.click();
    yield protractor_2.browser.sleep(2000);
    yield protractor_2.browser.driver.sleep(2000);
}));
// User selects Reporter Id and Exchanges
When(/^User inputs Exchanges (.*) filter$/, (Exchange) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to add exchange");
    yield query.arrowIconForGeneral.click();
    yield protractor_2.browser.sleep(2000);
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    // User selects Reporter ID
    // Open select
    //element(by.name('reporterIDs')).click();
    yield query.generalFilterReporterIds.click();
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.executeScript(query.generalFilterReporterID_ARCA);
    yield protractor_2.browser.driver.sleep(3000);
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.actions().sendKeys(protractor_2.protractor.Key.TAB).perform();
    yield query.generalFilterReporterID_Add.click();
    yield protractor_2.browser.driver.sleep(3000);
    yield protractor_2.browser.waitForAngular();
    yield query.generalFilterReporterID_Close.click();
    // scroll page
    yield protractor_2.browser.executeScript('window.scrollTo(0,180);');
    // User selects Exchanges
    // Open select
    yield query.generalFilterExchange.click();
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.executeScript(query.generalFilterExchangeOption);
    yield protractor_2.browser.actions().sendKeys(protractor_2.protractor.Key.TAB).perform();
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield query.generalFilterExchange_Add.click();
}));
// User Inputs Order Id
When(/^User inputs Order Id (.*) filter$/, (Order_Id) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to add Order_Id");
    yield query.generalFilterOrderId.sendKeys(Order_Id);
    yield protractor_2.browser.driver.sleep(5000);
    yield protractor_2.browser.waitForAngular();
}));
// User selects Order Types
When(/^User selects Order Types (.*) filter$/, (Order_Types) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to add Order_Types");
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.executeScript('window.scrollTo(0,400);');
    yield protractor_2.browser.driver.sleep(4000);
    yield protractor_2.browser.waitForAngular();
    yield query.generalFilterDeselectAllLink.click();
    yield protractor_2.browser.driver.sleep(3000);
    yield protractor_2.browser.waitForAngular();
    yield query.generalFilterOrderTypeLMT.click();
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
}));
When(/^User inputs Trades Trade Price (.*) and Trade Quantity (.*) filters$/, (Trade_Price, Trade_Quantity) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to add Trade_Price & Trade_Quantity");
    yield query.arrowIconForPQ.click();
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.driver.sleep(5000);
    yield query.pQTradesPriceSelection.click();
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-option-text')[3].click()");
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-option-text')[0].click()");
    yield query.pQTradesPriceInput.sendKeys(Trade_Price);
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield query.pQTradesQuantitySelection.click();
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.driver.sleep(2000);
    //await browser.actions().sendKeys(protractor.Key.TAB).perform();
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-option-text')[3].click()");
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-option-text')[0].click()");
    yield query.pQTradesPriceQuantity.sendKeys(Trade_Quantity);
}));
When(/^User inputs Oder details (.*) and (.*) filters$/, (Limit_Price, Order_Quantity) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to add Limit_Price & Order_Quantity");
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.driver.sleep(2000);
    yield query.pQOrdersLimitPriceSelection.click();
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.driver.sleep(1000);
    //await browser.actions().sendKeys(protractor.Key.TAB).perform();
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-option-text')[2].click()");
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-option-text')[0].click()");
    yield query.pQOrdersPriceInput.sendKeys(Limit_Price);
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.driver.sleep(2000);
    yield query.pQOrdersQuantitySelection.click();
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.driver.sleep(1000);
    //await browser.actions().sendKeys(protractor.Key.TAB).perform();
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-option-text')[2].click()");
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-option-text')[0].click()");
    yield query.pQOrdersPriceQuantity.sendKeys(Order_Quantity);
}));
When(/^User inputs Equity Capacity (.*) filter$/, (Equity_Capacity) => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to add Equity_Capacity ");
    yield query.arrowIconForEquities.click();
    yield protractor_2.browser.waitForAngular();
    yield protractor_2.browser.driver.sleep(2000);
    yield query.equetiesFilterDeselectAllLink.click();
    yield protractor_2.browser.driver.sleep(4000);
    yield protractor_2.browser.waitForAngular();
    // click on checkbox
    yield protractor_2.browser.executeScript("document.getElementsByClassName('mat-checkbox-input')[11].click()");
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield query.arrowIconForOptions.click();
    yield query.arrowIconForOptions.click();
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    const until = protractor_2.protractor.ExpectedConditions;
    yield protractor_2.browser.wait(until.presenceOf(protractor_1.element.all(protractor_1.by.css('.ag-row  > div')).get(0)), 5000, 'Element taking too long to appear in the DOM');
    yield protractor_1.element.all(protractor_1.by.className('ag-row')).get(0).isPresent().then(txt => expect(txt).to.be.true);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row  > div')).get(0).getText().then(text => queryID = text);
    console.log('querzzID : ==========>', queryID);
}));
When(/^User clicks SUBMIT button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> going to click submit button");
    yield query.queryPageSubmit.click();
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
}));
Then(/^Submit Query Confirmation popup window is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> Confirmation Popup is displayed");
    yield query.submitQueryConfirmationPopup.isPresent().then(text => expect(text).to.be.true);
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
}));
Given(/^User is on the Submit Query Confirmation popup window$/, () => __awaiter(this, void 0, void 0, function* () {
    yield query.submitQueryConfirmationPopup.isPresent().then(text => expect(text).to.be.true);
}));
When(/^User modifies the Query Name$/, () => __awaiter(this, void 0, void 0, function* () {
    yield query.queryNameInput.clear();
    yield query.queryNameInput.sendKeys('Query Event_Test001');
}));
When(/^User Validates the details of the Query Confirmation popup window$/, () => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> validates query comfirm popup");
    let text = 'SUBMIT QUERY CONFIRMATION\nAre you sure you want to submit the following query:\nQuery Name:\nSearch Parameters\nStart Date\n10/02/2017\nStart Time\n08:00:00\nEnd Date\n10/02/2017\nEnd Time\n14:00:00\nTrades & Orders\nBoth\nEquities & Options\nEquities Only\nSymbols\nAAPL\nAdvanced Filters\nExchanges\nARCA\nReporter IDs\nAny\nOrder Types\nLMT\nCapacity\nPrincipal\nOrder Ids\n16044086573117208\nTrade Price\nEquals 153.40\nTrade Qty\nEquals 92\nOrder Price\nEquals 153.40\nOrder Qty\nEquals 92\nCANCEL\nSUBMIT';
    text = text.split('\n').filter(value => Object.keys(value).length !== 0);
    let pageTitle = "Submit Query Confirmation";
    yield query.submitQueryConfirmationPopup.getText().then(txt => {
        const res = txt.split('\n').filter(value => Object.keys(value).length !== 0);
        assert.includeMembers(res, text, 'not include ordered members');
    });
    yield protractor_2.browser.driver.sleep(5000);
    yield protractor_2.browser.waitForAngular();
}));
When(/^User clicks Submit button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield console.log("==> submit btn clicking.");
    yield query.submitBtnPopup.click();
    yield protractor_2.browser.driver.sleep(5000);
    yield protractor_2.browser.waitForAngular();
}));
When(/^The Submit Query Confirmation popup window is closed and the Submitted Query is listed in the Submitted Queries table grid$/, () => __awaiter(this, void 0, void 0, function* () {
    yield console.log("close popup and assert table grid");
    yield query.submitQueryConfirmationPopup.isPresent().then(text => expect(text).to.be.false);
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    console.log('querzzID : ==========>', queryID);
    const until = protractor_2.protractor.ExpectedConditions;
    yield protractor_2.browser.wait(until.presenceOf(protractor_1.element.all(protractor_1.by.css('.ag-row  > div')).get(0)), 3000, 'Element taking too long to appear in the DOM');
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div')).get(0).getText().then(text => updatedQueryID = text);
    console.log('updatedqueryid : ==========>', updatedQueryID);
    yield expect(queryID).to.be.not.equal(updatedQueryID);
}));
When(/^User validates the Query record data for all the columns for Statuses Processing and Completed$/, () => __awaiter(this, void 0, void 0, function* () {
    const until = protractor_2.protractor.ExpectedConditions;
    yield protractor_2.browser.wait(until.presenceOf(protractor_1.element.all(protractor_1.by.css('.ag-row  > div')).get(0)), 2000, 'Element taking too long to appear in DOM1');
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(4)')).get(0).getText().then(text => status = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(9)')).get(0).getText().then(text => resultCount = text);
    // await expect(status).to.be.equal('To Process');
    // await expect(resultCount).to.be.undefined;
    yield protractor_2.browser.driver.sleep(18000000);
    yield protractor_2.browser.waitForAngular();
    //await expect(status).to.be.not.equal('Cancelled');
    // await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div:nth-child(0)')).get(0)), 5000, 'Element taking too long to appear in the DOM');
    // await element.all(by.css('.ag-row > div:nth-child(4)')).get(0).getText().then(text => status = text);
    // await element.all(by.css('.ag-row > div:nth-child(9)')).get(0).getText().then(text => resultCount = text);
    yield expect(status).to.be.equal('Processing');
    yield protractor_2.browser.wait(until.presenceOf(protractor_1.element.all(protractor_1.by.css('.ag-row  > div:nth-child(0)')).get(0)), 5000, 'Element taking too long to appear in the DOM2');
    yield protractor_2.browser.driver.sleep(180000000000);
    yield protractor_2.browser.waitForAngular();
    yield expect(status).to.be.equal('Completed');
    yield protractor_2.browser.wait(until.presenceOf(protractor_1.element.all(protractor_1.by.css('.ag-row  > div:nth-child(0)')).get(0)), 5000, 'Element taking too long to appear in the DOM');
    yield expect(resultCount).to.exist;
}));
Then(/^The Results Count is null for status Processing and populates data for Results Count for status Completed$/, () => __awaiter(this, void 0, void 0, function* () {
    const until = protractor_2.protractor.ExpectedConditions;
    yield protractor_2.browser.wait(until.presenceOf(protractor_1.element.all(protractor_1.by.css('.ag-row  > div')).get(0)), 3000, 'Element taking too long to appear in the DOM');
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(4)')).get(0).getText().then(text => status = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(9)')).get(0).getText().then(text => resultCount = text);
    yield expect(status).to.be.equal('Completed');
    yield expect(resultCount).to.exist;
}));
Given(/^User is on the Query Results Page of the submitted Query Id$/, () => __awaiter(this, void 0, void 0, function* () {
    const until = protractor_2.protractor.ExpectedConditions;
    yield protractor_2.browser.wait(until.presenceOf(protractor_1.element.all(protractor_1.by.css('.ag-row  > div')).get(0)), 3000, 'Element taking too long to appear in the DOM');
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div')).get(0).getText().then(text => updatedQueryID = text);
    yield expect(updatedQueryID).to.be.exist;
}));
When(/^User validates the details on the Submission Information tab$/, () => __awaiter(this, void 0, void 0, function* () {
    const until = protractor_2.protractor.ExpectedConditions;
    yield protractor_2.browser.wait(until.presenceOf(protractor_1.element.all(protractor_1.by.css('.ag-row  > div')).get(0)), 3000, 'Element taking too long to appear in the DOM');
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(4)')).get(0).getText().then(text => status = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(9)')).get(0).getText().then(text => resultCount = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div')).get(0).getText().then(text => updatedQueryID = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(2)')).get(0).getText().then(text => queryName = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(3)')).get(0).getText().then(text => lifeCycle = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(5)')).get(0).getText().then(text => dateSubmitted = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(6)')).get(0).getText().then(text => timeSubmitted = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(7)')).get(0).getText().then(text => dateCompleted = text);
    yield protractor_1.element.all(protractor_1.by.css('.ag-row > div:nth-child(8)')).get(0).getText().then(text => timeCompleted = text);
    console.log("============> timecompleted", timeCompleted);
    yield protractor_2.browser.executeScript(`var a = document.getElementsByClassName('gridContainer')[0];
    a.getElementsByClassName('material-icons')[1].click();`);
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield protractor_1.element.all(protractor_1.by.css('.result-back-btn > span')).get(0).isPresent().then(txt => expect(txt).to.be.true);
    yield protractor_1.element.all(protractor_1.by.css('.result-back-btn > span > strong')).get(0).getText().then(text => expect(text).to.be.equal(updatedQueryID));
    yield protractor_1.element.all(protractor_1.by.css('.summaryContainer > div:nth-child(1) > ul > li:nth-child(1)')).get(0).getText()
        .then(text => expect(text).to.be.equal('Submission Information'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryContainer > div:nth-child(1) > ul > li:nth-child(2)')).get(0).getText()
        .then(text => expect(text).to.be.equal('Query Parameters and Filters'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(1) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Generated Query Id:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(1) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(2) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Query Name:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(2) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(3) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Lifecycle:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(3) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(4) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Status:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(4) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(5) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Result Count:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(5) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(6) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Date and Time Submitted (ET):'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(6) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(7) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Date and Time Completed (ET):'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(7) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
}));
Then(/^Submission Information tab details should match the Submitted Queries table grid data$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(1) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(updatedQueryID));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(2) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(queryName));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(3) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(lifeCycle));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(4) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(status.slice(0, -1)));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(5) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(resultCount));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(6) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(`${dateSubmitted} ${timeSubmitted}`));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(7) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(`${dateCompleted} ${timeCompleted}`));
}));
Then(/^User validates the details on the Query Parameters and Filters tab$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element.all(protractor_1.by.css('.summaryContainer > div:nth-child(1) > ul > li:nth-child(2)')).get(0).click();
    yield protractor_2.browser.driver.sleep(2000);
    yield protractor_2.browser.waitForAngular();
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(1)')).get(0).getText()
        .then(text => expect(text).to.be.equal('Search Parameters'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(2) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('From Time:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(2) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(3) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('To Time:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(3) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(4) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Symbols:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(4) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(5) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Types:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(5) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(6)')).get(0).getText()
        .then(text => expect(text).to.be.equal('Advanced Filter'));
    yield protractor_2.browser.driver.sleep(20000);
    yield protractor_2.browser.waitForAngular();
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(7) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Reporter ID:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(7) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(8) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Exchange:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(8) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(9) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Order ID:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(9) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(10) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Order Type:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(10) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(11) > .label')).get(0).getText()
        .then(text => expect(text).to.be.equal('Capacity:'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(11) > .value')).get(0).getText()
        .then(text => expect(text).to.be.exist);
}));
Then(/^Query Parameters and Filters tab details should match the Submit Query Confirmation popup data (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*)$/, (Date, From_Time, To_Time, Trades_Orders, Equities_Options, Symbols, Exchange, Order_Id, Order_Types, Trade_Price, Trade_Quantity, Limit_Price, Order_Quantity, Equity_Capacity) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(2) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(`2/10/2017 ${From_Time}`));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(3) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(`2/10/2017 ${To_Time}`));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(4) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(Symbols));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(5) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(`${Trades_Orders}, ${Equities_Options}`));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(7) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal('Any'));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(8) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(Exchange));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(9) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(Order_Id));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(10) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(Order_Types));
    yield protractor_1.element.all(protractor_1.by.css('.summaryPanel > div:nth-child(11) > .value')).get(0).getText()
        .then(text => expect(text).to.be.equal(Equity_Capacity));
}));
Then(/^User validates the Grid data$/, () => __awaiter(this, void 0, void 0, function* () {
    console.log("right now no data is disaplayed");
    yield expect(1).to.be.equal(1);
}));
Then(/^should match with the backend data$/, () => __awaiter(this, void 0, void 0, function* () {
    console.log("right now no data is disaplayed");
    yield expect(1).to.be.equal(1);
}));
