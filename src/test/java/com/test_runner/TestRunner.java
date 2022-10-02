package com.test_runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.gmail_ebay.GmailEbay.BaseClass;
import com.properties.ConfigurationHelper;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features = {"src\\test\\java\\com\\feature\\gmail_ebay.feature", "src\\test\\java\\com\\feature\\gmail_ebay1.feature"},
					glue = "com.step_definition", dryRun = true,strict=false,
					/*tags = {"@smoke,@functional"},*/monochrome = true
					/*,plugin={"pretty","json:Reports/report2.json","html:Reports/report2.html","junit:Reports/report2.xml",
							"com.cucumber.listener.ExtentCucumberFormatter:Reports/Extentreport2.html"}*/)
public class TestRunner {
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws IOException {
		ConfigurationHelper.getInstance();
		String bowser = ConfigurationHelper.getInstanceCR().getBowser();
		driver= BaseClass.driverLaunch(bowser);
	}
	
	@AfterClass
	public static void tearDown() {
		BaseClass.driverQuit();
	}
}
