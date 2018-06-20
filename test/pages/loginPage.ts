import { $, ElementFinder, element, ElementArrayFinder, by } from "protractor";

export class LoginPageObject {
    public loginPageText: ElementFinder;
    public usernameInput: ElementFinder;
    public passwordInput: ElementFinder;
    public btnLogin : ElementFinder;
    public errorMsg: ElementArrayFinder;
    public formLoginErr: ElementFinder;
    public consolidatedMsg: ElementFinder;
    public arrowIconToLogout: ElementFinder;
    public logoutBtn: ElementFinder;
    constructor() {
        this.loginPageText= $(".login-container");
        this.usernameInput = $("#catUsernameInputField");
        this.passwordInput = $("#catPasswordInputField");
        this.btnLogin = $("#catLoginButton");
        this.errorMsg = element.all(by.className("input-field-error"));
        this.formLoginErr = element.all(by.className('form-login-error')).get(0);
        this.consolidatedMsg = $('#bannerText');
        this.arrowIconToLogout = element.all(by.cssContainingText('.material-icons','expand_more')).get(0);
        this.logoutBtn = element(by.buttonText('Logout'));
    }
}

