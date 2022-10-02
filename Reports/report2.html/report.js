$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/gmail_ebay1.feature");
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
  "duration": 5027201200,
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
  "duration": 727230800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition1.user_Click_The_Search_Button_And_It_Will_Navigate_To_Electric_Guitar_Page()"
});
formatter.result({
  "duration": 2524212501,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unexpected command response\n  (Session info: chrome\u003d104.0.5112.81)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EM3OVKO\u0027, ip: \u0027192.168.41.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.81, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Umamani\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55788}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 969d0e21c1c1333d3a310aec15eb4259\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat com.gmail_ebay.GmailEbay.BaseClass.userClick(BaseClass.java:30)\r\n\tat com.step_definition.StepDefinition1.user_Click_The_Search_Button_And_It_Will_Navigate_To_Electric_Guitar_Page(StepDefinition1.java:34)\r\n\tat ✽.Then user Click The Search Button And It Will Navigate To Electric Guitar Page(src/test/java/com/feature/gmail_ebay1.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "Electric Guitar Page",
  "description": "",
  "id": "ebay-task;electric-guitar-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@functional"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user Click The First Guitar And It Will Navigate To First Guitar Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.user_Click_The_First_Guitar_And_It_Will_Navigate_To_First_Guitar_Page()"
});
formatter.result({
  "duration": 1913336600,
  "status": "passed"
});
});