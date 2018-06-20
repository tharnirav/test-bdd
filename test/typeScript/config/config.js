"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    //seleniumAddress: Direct,
    SELENIUM_PROMISE_MANAGER: false,
    //baseUrl: "http://usapdevhost002.thesyscat.com:8080/manish/#/login",
    // queryBaseUrl: "https://usapdevhost002.thesyscat.com/#/query",
    //baseUrl: "https://fdevtest020.thesyscat.com/#/login",
    baseUrl: "http://localhost:4400/#/login",
    //queryBaseUrl: "https://fdevtest020.thesyscat.com/#/query",
    queryBaseUrl: "http://localhost:4400/#/query",
    capabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
        'chromeOptions': {
            useAutomationExtension: false,
        }
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../../features/*.feature",
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().setSize(1640, 920);
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@CucumberScenario or @OutlineScenario or @smoke or @Scenario",
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    }
};
