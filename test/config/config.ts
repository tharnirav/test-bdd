import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
import { Direct } from "protractor/built/driverProviders";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

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
        acceptInsecureCerts : true,
        'chromeOptions': {
            useAutomationExtension: false,
       //     args: [ "--headless","--disable-gpu","--window-size=800x600"]
        }
    },
  

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().setSize(1640,920);
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@CucumberScenario or @OutlineScenario or @smoke or @Scenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    }
};
