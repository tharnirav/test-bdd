"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPageObject {
    constructor() {
        this.loginPageText = protractor_1.$(".login-container");
        this.usernameInput = protractor_1.$("#catUsernameInputField");
        this.passwordInput = protractor_1.$("#catPasswordInputField");
        this.btnLogin = protractor_1.$("#catLoginButton");
        this.errorMsg = protractor_1.element.all(protractor_1.by.className("input-field-error"));
        this.formLoginErr = protractor_1.element.all(protractor_1.by.className('form-login-error')).get(0);
        this.consolidatedMsg = protractor_1.$('#bannerText');
        this.arrowIconToLogout = protractor_1.element.all(protractor_1.by.cssContainingText('.material-icons', 'expand_more')).get(0);
        this.logoutBtn = protractor_1.element(protractor_1.by.buttonText('Logout'));
    }
}
exports.LoginPageObject = LoginPageObject;
