"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class QueryPageObject {
    constructor() {
        //this.fromDate = $('#md-input-4');
        this.fromDate = protractor_1.element.all(protractor_1.by.className('input_date')).get(0);
        //this.fromTime = $('#md-input-5');
        this.fromTime = protractor_1.element.all(protractor_1.by.className('input_date')).get(1);
        //this.toTime = $('#md-input-6');  
        this.toTime = protractor_1.element.all(protractor_1.by.className('input_date')).get(2);
        this.equitiesOnly = protractor_1.element.all(protractor_1.by.className('mat-radio-label')).get(4);
        this.tardersAndOrders = protractor_1.element.all(protractor_1.by.className('mat-radio-label')).get(0);
        this.symbolInput = protractor_1.$('.symbol_input');
        this.addSymbol = protractor_1.$('.addSymbol');
        this.arrowIconForGeneral = protractor_1.element.all(protractor_1.by.className('iconArrowSm')).get(0);
        this.generalFilterReporterIds = protractor_1.element(protractor_1.by.name('reporterIDs'));
        this.generalFilterReporterID_ARCA = "document.getElementsByClassName('mat-option-pseudo-checkbox')[0].click()";
        this.generalFilterReporterID_Add = protractor_1.element.all(protractor_1.by.className('generalInputBtn')).get(0);
        this.generalFilterReporterID_Close = protractor_1.element.all(protractor_1.by.className('close_tag')).get(1);
        this.generalFilterExchange = protractor_1.element(protractor_1.by.name('exchanges'));
        this.generalFilterExchangeOption = "document.getElementsByClassName('mat-option-pseudo-checkbox')[1].click()";
        this.generalFilterExchange_Add = protractor_1.element.all(protractor_1.by.className('generalInputBtn')).get(3);
        this.generalFilterOrderId = protractor_1.element.all(protractor_1.by.className('generalInput3')).get(0);
        this.generalFilterDeselectAllLink = protractor_1.element.all(protractor_1.by.partialLinkText('Deselect')).get(0);
        //this.generalFilterSelectAllLink = element.all(by.partialLinkText('Select All')).get(0);
        this.generalFilterOrderTypeLMT = protractor_1.element.all(protractor_1.by.css('.mat-checkbox-inner-container')).get(1);
        // Prices & Quantities Tab
        this.arrowIconForPQ = protractor_1.element.all(protractor_1.by.className('iconArrowSm')).get(1);
        //Trades
        //this.pQTradesPriceInput = element(by.id('tradePrice')); 
        //this.pQTradesPriceQuantity = element(by.id('tradeQuantity'));
        this.pQTradesPriceSelection = protractor_1.element(protractor_1.by.name('price'));
        this.pQTradesPriceInput = protractor_1.element.all(protractor_1.by.className('priceInput')).get(0);
        this.pQTradesQuantitySelection = protractor_1.element(protractor_1.by.name('quantity'));
        this.pQTradesPriceQuantity = protractor_1.element.all(protractor_1.by.className('priceInput')).get(1);
        //Orders
        this.pQOrdersLimitPriceSelection = protractor_1.element(protractor_1.by.name('orderBidPrice1'));
        this.pQOrdersPriceInput = protractor_1.element.all(protractor_1.by.className('priceInput')).get(2);
        this.pQOrdersQuantitySelection = protractor_1.element(protractor_1.by.name('orderOfferPrice'));
        this.pQOrdersPriceQuantity = protractor_1.element.all(protractor_1.by.className('priceInput')).get(3);
        //Equities Tab
        this.arrowIconForEquities = protractor_1.element.all(protractor_1.by.className('iconArrowSm')).get(2);
        this.equetiesFilterDeselectAllLink = protractor_1.element.all(protractor_1.by.partialLinkText('Deselect')).get(1);
        this.equetiesFilterEquityCapacityPrincipal = protractor_1.element.all(protractor_1.by.className('mat-checkbox-inner-container')).get(0);
        //Options Tab
        this.arrowIconForOptions = protractor_1.element.all(protractor_1.by.className('iconArrowSm')).get(3);
        //Query Page Submit Button
        this.queryPageSubmit = protractor_1.element.all(protractor_1.by.className('button')).get(1);
        //Submit Query Confirmation popup window
        this.submitQueryConfirmationPopup = protractor_1.$('.submit-dialog');
        this.queryNameInput = protractor_1.$('input[name="listQueryName"]');
        this.submitBtnPopup = this.submitQueryConfirmationPopup.element(protractor_1.by.buttonText('SUBMIT'));
    }
}
exports.QueryPageObject = QueryPageObject;
