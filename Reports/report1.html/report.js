$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/gmail_ebay.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Task",
  "description": "",
  "id": "gmail-task",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Email Page",
  "description": "",
  "id": "gmail-task;login-email-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"\u003cemail\u003e\" In The Email Textfield",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Click The Next Button And It Will Navigate To Login Password Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "gmail-task;login-email-page;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 9,
      "id": "gmail-task;login-email-page;;1"
    },
    {
      "cells": [
        "java123"
      ],
      "line": 10,
      "id": "gmail-task;login-email-page;;2"
    },
    {
      "cells": [
        "selenium123"
      ],
      "line": 11,
      "id": "gmail-task;login-email-page;;3"
    },
    {
      "cells": [
        "automation.test1402"
      ],
      "line": 12,
      "id": "gmail-task;login-email-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login Email Page",
  "description": "",
  "id": "gmail-task;login-email-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"java123\" In The Email Textfield",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Click The Next Button And It Will Navigate To Login Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Url()"
});
formatter.result({
  "duration": 3458241000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java123",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Email_Textfield(String)"
});
formatter.result({
  "duration": 701529100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Next_Button_And_It_Will_Navigate_To_Login_Password_Page()"
});
formatter.result({
  "duration": 86449800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login Email Page",
  "description": "",
  "id": "gmail-task;login-email-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"selenium123\" In The Email Textfield",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Click The Next Button And It Will Navigate To Login Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Url()"
});
formatter.result({
  "duration": 703782300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium123",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Email_Textfield(String)"
});
formatter.result({
  "duration": 397835500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Next_Button_And_It_Will_Navigate_To_Login_Password_Page()"
});
formatter.result({
  "duration": 90673600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Email Page",
  "description": "",
  "id": "gmail-task;login-email-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"automation.test1402\" In The Email Textfield",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Click The Next Button And It Will Navigate To Login Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Url()"
});
formatter.result({
  "duration": 1001514400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automation.test1402",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Email_Textfield(String)"
});
formatter.result({
  "duration": 349653100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Next_Button_And_It_Will_Navigate_To_Login_Password_Page()"
});
formatter.result({
  "duration": 90181400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login Password Page",
  "description": "",
  "id": "gmail-task;login-password-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user Enter The \"\u003cpassword\u003e\" In The Password Textfield",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Click The Next Button And It Will Navigate To Google Account Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "gmail-task;login-password-page;",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 19,
      "id": "gmail-task;login-password-page;;1"
    },
    {
      "cells": [
        "S3l1n1um"
      ],
      "line": 20,
      "id": "gmail-task;login-password-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Login Password Page",
  "description": "",
  "id": "gmail-task;login-password-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user Enter The \"S3l1n1um\" In The Password Textfield",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Click The Next Button And It Will Navigate To Google Account Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "S3l1n1um",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Password_Textfield(String)"
});
formatter.result({
  "duration": 1506115800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Next_Button_And_It_Will_Navigate_To_Google_Account_Page()"
});
formatter.result({
  "duration": 111482000,
  "status": "passed"
});
formatter.uri("src/test/java/com/feature/gmail_ebay1.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Task",
  "description": "",
  "id": "ebay-task",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@second"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Home Page",
  "description": "",
  "id": "ebay-task;ebay-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Ebay Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"electric guitar\" In The Search Textfield",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Click The Search Button And It Will Navigate To Electric Guitar Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.user_Launch_The_Ebay_Url()"
});
formatter.result({
  "duration": 2544830200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "electric guitar",
      "offset": 16
    }
  ],
  "location": "StepDefinition1.user_Enter_The_In_The_Search_Textfield(String)"
});
formatter.result({
  "duration": 265242400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition1.user_Click_The_Search_Button_And_It_Will_Navigate_To_Electric_Guitar_Page()"
});
formatter.result({
  "duration": 2003425000,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unexpected command response\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EM3OVKO\u0027, ip: \u0027192.168.147.147\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Umamani\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:62268}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1ea12cafbd1800b33c4e734eb096aed5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat com.gmail_ebay.GmailEbay.BaseClass.userClick(BaseClass.java:30)\r\n\tat com.step_definition.StepDefinition1.user_Click_The_Search_Button_And_It_Will_Navigate_To_Electric_Guitar_Page(StepDefinition1.java:34)\r\n\tat ✽.Then user Click The Search Button And It Will Navigate To Electric Guitar Page(src/test/java/com/feature/gmail_ebay1.feature:7)\r\n",
  "status": "failed"
});
});