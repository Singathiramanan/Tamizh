package com.test_runner;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.gmail_ebay.GmailEbay.BaseClass;
import com.properties.ConfigurationHelper;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src\\test\\java\\com\\feature\\gmail_ebay.feature", "src\\test\\java\\com\\feature\\gmail_ebay1.feature"},
					glue = "com.step_definition", dryRun = false,
					tags = {"@ebay"}, monochrome = true)
public class Test {
public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws IOException {
		String bowser = ConfigurationHelper.getInstance().getInstanceCR().getBowser();
		driver= BaseClass.driverLaunch(bowser);
	}
}