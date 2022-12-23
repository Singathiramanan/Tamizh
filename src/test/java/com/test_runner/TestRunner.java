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
@CucumberOptions(features = {"/tamizh1/src/test/java/com/feature/gmail_ebay.feature", "/tamizh1/src/test/java/com/feature/gmail_ebay1.feature"},
					glue = "com.step_definition", dryRun = false,
					tags = {"@ebay"}, monochrome = true)
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
