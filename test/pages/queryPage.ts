
import { $, ElementFinder, element, ElementArrayFinder, by, ElementHelper } from "protractor";

export class QueryPageObject {

    public fromDate: ElementFinder;
    public fromTime: ElementFinder;
    public toTime: ElementFinder;
    public equitiesOnly: ElementFinder;
    public tardersAndOrders: ElementFinder;
    public symbolInput: ElementFinder;
    public addSymbol: ElementFinder;

    //General Tab
    public arrowIconForGeneral: ElementFinder;
    public generalFilterReporterIds: ElementFinder;
    public generalFilterReporterID_ARCA: string;
    public generalFilterReporterID_Add: ElementFinder;
    public generalFilterReporterID_Close: ElementFinder;

    public generalFilterExchange: ElementFinder;
    public generalFilterExchangeOption: string;
    public generalFilterExchange_Add: ElementFinder;

    public generalFilterOrderId: ElementFinder;
    //public generalFilterDeselectAllLink: ElementFinder;
    public generalFilterDeselectAllLink;
    public generalFilterSelectAllLink: ElementFinder;
    //public generalFilterLMTChBox: ElementFinder;
    public generalFilterOrderTypeLMT;

    // Prices & Quantities Tab
    public arrowIconForPQ: ElementFinder;
    
 

    //Trades
    public pQTradesPriceSelection: ElementFinder;
    public pQTradesPriceInput: ElementFinder;
    public pQTradesQuantitySelection: ElementFinder;
    public pQTradesPriceQuantity: ElementFinder;

    //Orders
    public pQOrdersLimitPriceSelection: ElementFinder;
    public pQOrdersPriceInput: ElementFinder;
    public pQOrdersQuantitySelection: ElementFinder;
    public pQOrdersPriceQuantity: ElementFinder;

    //Equities Tab
    public arrowIconForEquities: ElementFinder;
    public equetiesFilterDeselectAllLink: ElementFinder;
    public equetiesFilterEquityCapacityPrincipal: ElementFinder;

    //Options Tab
    public arrowIconForOptions: ElementFinder;

    //Query Page Submit Button
    public queryPageSubmit: ElementFinder;

    //Submit Query Confirmation popup window
    public submitQueryConfirmationPopup: ElementFinder;
    public queryNameInput: ElementFinder;
    public submitBtnPopup: ElementFinder;


    constructor() {
        //this.fromDate = $('#md-input-4');
        this.fromDate = element.all(by.className('input_date')).get(0);

        //this.fromTime = $('#md-input-5');

        this.fromTime = element.all(by.className('input_date')).get(1);

        //this.toTime = $('#md-input-6');  

        this.toTime = element.all(by.className('input_date')).get(2);

        this.equitiesOnly = element.all(by.className('mat-radio-label')).get(4);
        this.tardersAndOrders = element.all(by.className('mat-radio-label')).get(0);
        this.symbolInput = $('.symbol_input');
        this.addSymbol = $('.addSymbol');
        this.arrowIconForGeneral = element.all(by.className('iconArrowSm')).get(0);
        this.generalFilterReporterIds = element(by.name('reporterIDs'));
        this.generalFilterReporterID_ARCA = "document.getElementsByClassName('mat-option-pseudo-checkbox')[0].click()";
        this.generalFilterReporterID_Add = element.all(by.className('generalInputBtn')).get(0);
        this.generalFilterReporterID_Close = element.all(by.className('close_tag')).get(1);

        this.generalFilterExchange = element(by.name('exchanges')); 
        this.generalFilterExchangeOption = "document.getElementsByClassName('mat-option-pseudo-checkbox')[1].click()";
        this.generalFilterExchange_Add = element.all(by.className('generalInputBtn')).get(3);
        this.generalFilterOrderId = element.all(by.className('generalInput3')).get(0);

        this.generalFilterDeselectAllLink = element.all(by.partialLinkText('Deselect')).get(0);
        //this.generalFilterSelectAllLink = element.all(by.partialLinkText('Select All')).get(0);

        this.generalFilterOrderTypeLMT = element.all(by.css('.mat-checkbox-inner-container')).get(1);

        // Prices & Quantities Tab
        this.arrowIconForPQ = element.all(by.className('iconArrowSm')).get(1);

        //Trades
        //this.pQTradesPriceInput = element(by.id('tradePrice')); 
        //this.pQTradesPriceQuantity = element(by.id('tradeQuantity'));
       
        this.pQTradesPriceSelection = element(by.name('price'));

        this.pQTradesPriceInput = element.all(by.className('priceInput')).get(0);
        this.pQTradesQuantitySelection = element(by.name('quantity'));
        this.pQTradesPriceQuantity = element.all(by.className('priceInput')).get(1);

        //Orders
        this.pQOrdersLimitPriceSelection = element(by.name('orderBidPrice1'));
        this.pQOrdersPriceInput = element.all(by.className('priceInput')).get(2);

        this.pQOrdersQuantitySelection = element(by.name('orderOfferPrice'));
        this.pQOrdersPriceQuantity = element.all(by.className('priceInput')).get(3);

        //Equities Tab
        this.arrowIconForEquities = element.all(by.className('iconArrowSm')).get(2);
        this.equetiesFilterDeselectAllLink = element.all(by.partialLinkText('Deselect')).get(1);
        this.equetiesFilterEquityCapacityPrincipal = element.all(by.className('mat-checkbox-inner-container')).get(0);

        //Options Tab
        this.arrowIconForOptions = element.all(by.className('iconArrowSm')).get(3);

        //Query Page Submit Button
        this.queryPageSubmit = element.all(by.className('button')).get(1);

        //Submit Query Confirmation popup window
        this.submitQueryConfirmationPopup = $('.submit-dialog');
        this.queryNameInput = $('input[name="listQueryName"]');
        this.submitBtnPopup = this.submitQueryConfirmationPopup.element(by.buttonText('SUBMIT'));

    }
}

