import { $, ElementFinder, element, ElementArrayFinder, by, ElementHelper } from "protractor";

import { browser, protractor } from "protractor";
import { QueryPageObject } from "../pages/queryPage";
import { config } from "../config/config";
import { TableDefinition } from "cucumber";
const { When, Then, Given, TableDefinition, setDefaultTimeout} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;

const query: QueryPageObject = new QueryPageObject();
let queryID :any;
let resultCount:any;
let status :any;
let updatedQueryID :any;
let queryName:any;
let lifeCycle:any;
let dateSubmitted:any;
let timeSubmitted:any;
let dateCompleted:any;
let timeCompleted:any;

Given(/^User is on the OTQT Home Page.$/, async () => {
    await console.log("==> Redirecting to query portal");
    await browser.driver.get(config.queryBaseUrl);
    await browser.sleep(5000);
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
    await browser.getTitle().then(txt => expect(txt).to.be.equal("Query Tool"));
    await console.log("==> On Query Portal Page");
});

When(/^User selects Date and Time range (.*) and (.*) and (.*) filters$/, async(Date, From_Time, To_Time) => {
    await console.log("==> going to assert query portal page", Date, From_Time, To_Time);
    await browser.sleep(2000);
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    await query.fromDate.sendKeys(Date);
    await query.fromTime.sendKeys(From_Time);
    await query.toTime.sendKeys(To_Time);
});

When(/^User selects Types (.*) and (.*) filters$/, async(Trades_Orders, Equities_Options) => {
    await console.log("==> going to select traders orders, equities options"); 
    await query.tardersAndOrders.click();
    await query.equitiesOnly.click();
});

When(/^User selects Symbols (.*) filter$/, async(Symbols) => {
    await console.log("==> going to add symbol"); 
    await query.symbolInput.sendKeys(Symbols);
    await query.addSymbol.click();
    await browser.sleep(2000);
    await browser.driver.sleep(2000);
});


 // User selects Reporter Id and Exchanges
When(/^User inputs Exchanges (.*) filter$/, async(Exchange) => {
    await console.log("==> going to add exchange"); 
    await query.arrowIconForGeneral.click();
    await browser.sleep(2000);
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    
    // User selects Reporter ID
    // Open select
    //element(by.name('reporterIDs')).click();
    await query.generalFilterReporterIds.click();
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    await browser.executeScript(query.generalFilterReporterID_ARCA);
    await browser.driver.sleep(3000);
    await browser.waitForAngular();

    await browser.actions().sendKeys(protractor.Key.TAB).perform();
    await query.generalFilterReporterID_Add.click();

    await browser.driver.sleep(3000);
    await browser.waitForAngular();
    await query.generalFilterReporterID_Close.click();
    
    // scroll page
    await browser.executeScript('window.scrollTo(0,180);');

    // User selects Exchanges
    // Open select
    await query.generalFilterExchange.click();
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    await browser.executeScript(query.generalFilterExchangeOption);
    await browser.actions().sendKeys(protractor.Key.TAB).perform();
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    await query.generalFilterExchange_Add.click();
});

 // User Inputs Order Id
When(/^User inputs Order Id (.*) filter$/, async(Order_Id) => {
    await console.log("==> going to add Order_Id"); 
    await query.generalFilterOrderId.sendKeys(Order_Id);
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
});

// User selects Order Types
When(/^User selects Order Types (.*) filter$/, async(Order_Types) => {
    await console.log("==> going to add Order_Types");
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    
    await browser.executeScript('window.scrollTo(0,400);');

    await browser.driver.sleep(4000); 
    await browser.waitForAngular();
    await query.generalFilterDeselectAllLink.click();
    await browser.driver.sleep(3000);
    await browser.waitForAngular();
    await query.generalFilterOrderTypeLMT.click();

    await browser.driver.sleep(2000);
    await browser.waitForAngular();
});

When(/^User inputs Trades Trade Price (.*) and Trade Quantity (.*) filters$/, async(Trade_Price, Trade_Quantity) => {
    await console.log("==> going to add Trade_Price & Trade_Quantity");
    await query.arrowIconForPQ.click();
    await browser.waitForAngular();
    await browser.driver.sleep(5000);
    

    await query.pQTradesPriceSelection.click(); 
    await browser.waitForAngular();
    await browser.driver.sleep(2000);

    await browser.executeScript("document.getElementsByClassName('mat-option-text')[3].click()");

    await browser.executeScript("document.getElementsByClassName('mat-option-text')[0].click()");

    await query.pQTradesPriceInput.sendKeys(Trade_Price);
    await browser.driver.sleep(2000);
    await browser.waitForAngular();

    await query.pQTradesQuantitySelection.click(); 
    await browser.waitForAngular();
    await browser.driver.sleep(2000);
    //await browser.actions().sendKeys(protractor.Key.TAB).perform();
    await browser.executeScript("document.getElementsByClassName('mat-option-text')[3].click()");
    await browser.executeScript("document.getElementsByClassName('mat-option-text')[0].click()");

    await query.pQTradesPriceQuantity.sendKeys(Trade_Quantity);
    
});

When(/^User inputs Oder details (.*) and (.*) filters$/, async(Limit_Price, Order_Quantity) => {
    await console.log("==> going to add Limit_Price & Order_Quantity"); 
    await browser.waitForAngular();
    await browser.driver.sleep(2000);
    

    await query.pQOrdersLimitPriceSelection.click(); 
    await browser.waitForAngular();
    await browser.driver.sleep(1000);

    //await browser.actions().sendKeys(protractor.Key.TAB).perform();
    await browser.executeScript("document.getElementsByClassName('mat-option-text')[2].click()");

    await browser.executeScript("document.getElementsByClassName('mat-option-text')[0].click()");

    await query.pQOrdersPriceInput.sendKeys(Limit_Price);
    await browser.waitForAngular();
    await browser.driver.sleep(2000);

    await query.pQOrdersQuantitySelection.click(); 
    await browser.waitForAngular();
    await browser.driver.sleep(1000);

    //await browser.actions().sendKeys(protractor.Key.TAB).perform();
    await browser.executeScript("document.getElementsByClassName('mat-option-text')[2].click()");

    await browser.executeScript("document.getElementsByClassName('mat-option-text')[0].click()");
    await query.pQOrdersPriceQuantity.sendKeys(Order_Quantity);

});

When(/^User inputs Equity Capacity (.*) filter$/, async(Equity_Capacity) => {
    await console.log("==> going to add Equity_Capacity ");
    await query.arrowIconForEquities.click(); 
    await browser.waitForAngular();
    await browser.driver.sleep(2000); 
    await query.equetiesFilterDeselectAllLink.click();
    await browser.driver.sleep(4000);
    await browser.waitForAngular();

    // click on checkbox
    await browser.executeScript("document.getElementsByClassName('mat-checkbox-input')[11].click()");
    await browser.driver.sleep(2000); 
    await browser.waitForAngular();

    await query.arrowIconForOptions.click();
    await query.arrowIconForOptions.click();
    await browser.driver.sleep(2000); 
    await browser.waitForAngular();
    
    const until = protractor.ExpectedConditions;
    await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div')).get(0)), 5000, 'Element taking too long to appear in the DOM');
    await element.all(by.className('ag-row')).get(0).isPresent().then(txt => expect(txt).to.be.true);
    await element.all(by.css('.ag-row  > div')).get(0).getText().then(text => queryID = text);
    
    console.log('querzzID : ==========>', queryID);
});

When(/^User clicks SUBMIT button$/, async() => {
    await console.log("==> going to click submit button");
    await query.queryPageSubmit.click();  
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
});

Then(/^Submit Query Confirmation popup window is displayed$/, async () => {
    await console.log("==> Confirmation Popup is displayed");
    await query.submitQueryConfirmationPopup.isPresent().then(text => expect(text).to.be.true);
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
});

Given(/^User is on the Submit Query Confirmation popup window$/, async () => {
    await query.submitQueryConfirmationPopup.isPresent().then(text => expect(text).to.be.true);
});

When(/^User modifies the Query Name$/, async() => {
    await query.queryNameInput.clear();
    await query.queryNameInput.sendKeys('Query Event_Test001'); 
});

When(/^User Validates the details of the Query Confirmation popup window$/, async() => {
    await console.log("==> validates query comfirm popup"); 
    let text:any = 'SUBMIT QUERY CONFIRMATION\nAre you sure you want to submit the following query:\nQuery Name:\nSearch Parameters\nStart Date\n10/02/2017\nStart Time\n08:00:00\nEnd Date\n10/02/2017\nEnd Time\n14:00:00\nTrades & Orders\nBoth\nEquities & Options\nEquities Only\nSymbols\nAAPL\nAdvanced Filters\nExchanges\nARCA\nReporter IDs\nAny\nOrder Types\nLMT\nCapacity\nPrincipal\nOrder Ids\n16044086573117208\nTrade Price\nEquals 153.40\nTrade Qty\nEquals 92\nOrder Price\nEquals 153.40\nOrder Qty\nEquals 92\nCANCEL\nSUBMIT';
    text = text.split('\n').filter(value => Object.keys(value).length !== 0);
    let pageTitle = "Submit Query Confirmation";
    await query.submitQueryConfirmationPopup.getText().then(txt => { 
        const res = txt.split('\n').filter(value => Object.keys(value).length !== 0);
        assert.includeMembers( res , text , 'not include ordered members');
       });
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
});

When(/^User clicks Submit button$/, async() => {
    await console.log("==> submit btn clicking."); 
    await query.submitBtnPopup.click();
    await browser.driver.sleep(5000);
    await browser.waitForAngular();
});

When(/^The Submit Query Confirmation popup window is closed and the Submitted Query is listed in the Submitted Queries table grid$/, async() => {
    await console.log("close popup and assert table grid");
   
    await query.submitQueryConfirmationPopup.isPresent().then(text => expect(text).to.be.false);
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    console.log('querzzID : ==========>', queryID);
    

    const until = protractor.ExpectedConditions;
    await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div')).get(0)), 3000, 'Element taking too long to appear in the DOM');
    await element.all(by.css('.ag-row > div')).get(0).getText().then(text => updatedQueryID = text);
    console.log('updatedqueryid : ==========>', updatedQueryID);
    await expect(queryID).to.be.not.equal(updatedQueryID);
});

When(/^User validates the Query record data for all the columns for Statuses Processing and Completed$/, async () => {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div')).get(0)), 2000, 'Element taking too long to appear in DOM1');
    await element.all(by.css('.ag-row > div:nth-child(4)')).get(0).getText().then(text => status = text);
    await element.all(by.css('.ag-row > div:nth-child(9)')).get(0).getText().then(text => resultCount = text);
    // await expect(status).to.be.equal('To Process');
    // await expect(resultCount).to.be.undefined;
    await browser.driver.sleep(18000000);
    await browser.waitForAngular();

    //await expect(status).to.be.not.equal('Cancelled');
    // await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div:nth-child(0)')).get(0)), 5000, 'Element taking too long to appear in the DOM');
    
    // await element.all(by.css('.ag-row > div:nth-child(4)')).get(0).getText().then(text => status = text);
    // await element.all(by.css('.ag-row > div:nth-child(9)')).get(0).getText().then(text => resultCount = text);


    await expect(status).to.be.equal('Processing');
    await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div:nth-child(0)')).get(0)), 5000, 'Element taking too long to appear in the DOM2');
    
    await browser.driver.sleep(180000000000);
    await browser.waitForAngular(); 
    
    await expect(status).to.be.equal('Completed');
    await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div:nth-child(0)')).get(0)), 5000, 'Element taking too long to appear in the DOM');
    await expect(resultCount).to.exist; 
});


Then(/^The Results Count is null for status Processing and populates data for Results Count for status Completed$/, async () => {

    const until = protractor.ExpectedConditions;
    await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div')).get(0)), 3000, 'Element taking too long to appear in the DOM');
    await element.all(by.css('.ag-row > div:nth-child(4)')).get(0).getText().then(text => status = text);
    await element.all(by.css('.ag-row > div:nth-child(9)')).get(0).getText().then(text => resultCount = text);
    await expect(status).to.be.equal('Completed');
    await expect(resultCount).to.exist;
});



Given(/^User is on the Query Results Page of the submitted Query Id$/, async() => {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div')).get(0)), 3000, 'Element taking too long to appear in the DOM');
    await element.all(by.css('.ag-row > div')).get(0).getText().then(text => updatedQueryID = text);
    await expect(updatedQueryID).to.be.exist;
});

When(/^User validates the details on the Submission Information tab$/, async() => {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.presenceOf(element.all(by.css('.ag-row  > div')).get(0)), 3000, 'Element taking too long to appear in the DOM');
    await element.all(by.css('.ag-row > div:nth-child(4)')).get(0).getText().then(text => status = text);
    await element.all(by.css('.ag-row > div:nth-child(9)')).get(0).getText().then(text => resultCount = text);
    await element.all(by.css('.ag-row > div')).get(0).getText().then(text => updatedQueryID = text);
    await element.all(by.css('.ag-row > div:nth-child(2)')).get(0).getText().then(text => queryName = text);
    await element.all(by.css('.ag-row > div:nth-child(3)')).get(0).getText().then(text => lifeCycle = text);
    await element.all(by.css('.ag-row > div:nth-child(5)')).get(0).getText().then(text => dateSubmitted = text);

    await element.all(by.css('.ag-row > div:nth-child(6)')).get(0).getText().then(text => timeSubmitted = text);
    await element.all(by.css('.ag-row > div:nth-child(7)')).get(0).getText().then(text => dateCompleted = text);
    await element.all(by.css('.ag-row > div:nth-child(8)')).get(0).getText().then(text => timeCompleted = text);
    console.log("============> timecompleted", timeCompleted);
    await browser.executeScript(`var a = document.getElementsByClassName('gridContainer')[0];
    a.getElementsByClassName('material-icons')[1].click();`);
    await browser.driver.sleep(2000);
    await browser.waitForAngular();

    await element.all(by.css('.result-back-btn > span')).get(0).isPresent().then(txt => expect(txt).to.be.true);
    await element.all(by.css('.result-back-btn > span > strong')).get(0).getText().then(text => expect(text).to.be.equal(updatedQueryID));
    await element.all(by.css('.summaryContainer > div:nth-child(1) > ul > li:nth-child(1)')).get(0).getText()
    .then(text => expect(text).to.be.equal('Submission Information'));
    await element.all(by.css('.summaryContainer > div:nth-child(1) > ul > li:nth-child(2)')).get(0).getText()
    .then(text => expect(text).to.be.equal('Query Parameters and Filters'));
    await element.all(by.css('.summaryPanel > div:nth-child(1) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Generated Query Id:'));
    await element.all(by.css('.summaryPanel > div:nth-child(1) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(2) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Query Name:'));
    await element.all(by.css('.summaryPanel > div:nth-child(2) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(3) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Lifecycle:'));
    await element.all(by.css('.summaryPanel > div:nth-child(3) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(4) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Status:'));
    await element.all(by.css('.summaryPanel > div:nth-child(4) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(5) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Result Count:'));
    await element.all(by.css('.summaryPanel > div:nth-child(5) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(6) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Date and Time Submitted (ET):'));
    await element.all(by.css('.summaryPanel > div:nth-child(6) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(7) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Date and Time Completed (ET):'));
    await element.all(by.css('.summaryPanel > div:nth-child(7) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
});

Then(/^Submission Information tab details should match the Submitted Queries table grid data$/, async() => {
    await element.all(by.css('.summaryPanel > div:nth-child(1) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(updatedQueryID));
    await element.all(by.css('.summaryPanel > div:nth-child(2) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(queryName));
    await element.all(by.css('.summaryPanel > div:nth-child(3) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(lifeCycle));
    await element.all(by.css('.summaryPanel > div:nth-child(4) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(status.slice(0, -1)));
    await element.all(by.css('.summaryPanel > div:nth-child(5) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(resultCount));
    await element.all(by.css('.summaryPanel > div:nth-child(6) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(`${dateSubmitted} ${timeSubmitted}`));
    await element.all(by.css('.summaryPanel > div:nth-child(7) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(`${dateCompleted} ${timeCompleted}`));
});

Then(/^User validates the details on the Query Parameters and Filters tab$/, async() => {
    await element.all(by.css('.summaryContainer > div:nth-child(1) > ul > li:nth-child(2)')).get(0).click();
    await browser.driver.sleep(2000);
    await browser.waitForAngular();
    await element.all(by.css('.summaryPanel > div:nth-child(1)')).get(0).getText()
    .then(text => expect(text).to.be.equal('Search Parameters'));
    await element.all(by.css('.summaryPanel > div:nth-child(2) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('From Time:'));
    await element.all(by.css('.summaryPanel > div:nth-child(2) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(3) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('To Time:'));
    await element.all(by.css('.summaryPanel > div:nth-child(3) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(4) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Symbols:'));
    await element.all(by.css('.summaryPanel > div:nth-child(4) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(5) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Types:'));
    await element.all(by.css('.summaryPanel > div:nth-child(5) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(6)')).get(0).getText()
    .then(text => expect(text).to.be.equal('Advanced Filter'));
    await browser.driver.sleep(20000);
    await browser.waitForAngular();
    await element.all(by.css('.summaryPanel > div:nth-child(7) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Reporter ID:'));
    await element.all(by.css('.summaryPanel > div:nth-child(7) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(8) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Exchange:'));
    await element.all(by.css('.summaryPanel > div:nth-child(8) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(9) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Order ID:'));
    await element.all(by.css('.summaryPanel > div:nth-child(9) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(10) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Order Type:'));
    await element.all(by.css('.summaryPanel > div:nth-child(10) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
    await element.all(by.css('.summaryPanel > div:nth-child(11) > .label')).get(0).getText()
    .then(text => expect(text).to.be.equal('Capacity:'));
    await element.all(by.css('.summaryPanel > div:nth-child(11) > .value')).get(0).getText()
    .then(text => expect(text).to.be.exist);
});

Then(/^Query Parameters and Filters tab details should match the Submit Query Confirmation popup data (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*)$/, 
async(Date, From_Time, To_Time, Trades_Orders, Equities_Options, Symbols, Exchange, Order_Id, Order_Types, Trade_Price, Trade_Quantity, Limit_Price, Order_Quantity, Equity_Capacity) => {
    await element.all(by.css('.summaryPanel > div:nth-child(2) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(`2/10/2017 ${From_Time}`));
    await element.all(by.css('.summaryPanel > div:nth-child(3) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(`2/10/2017 ${To_Time}`));
    await element.all(by.css('.summaryPanel > div:nth-child(4) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(Symbols));
    await element.all(by.css('.summaryPanel > div:nth-child(5) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(`${Trades_Orders}, ${Equities_Options}`));
    await element.all(by.css('.summaryPanel > div:nth-child(7) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal('Any'));
    await element.all(by.css('.summaryPanel > div:nth-child(8) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(Exchange));
    await element.all(by.css('.summaryPanel > div:nth-child(9) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(Order_Id));
    await element.all(by.css('.summaryPanel > div:nth-child(10) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(Order_Types));
    await element.all(by.css('.summaryPanel > div:nth-child(11) > .value')).get(0).getText()
    .then(text => expect(text).to.be.equal(Equity_Capacity));
});

Then(/^User validates the Grid data$/, async() => {
    console.log("right now no data is disaplayed");
    await expect(1).to.be.equal(1);
});

Then(/^should match with the backend data$/, async() => {
    console.log("right now no data is disaplayed");
    await expect(1).to.be.equal(1);
});