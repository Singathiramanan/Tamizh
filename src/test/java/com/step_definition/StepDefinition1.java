package com.step_definition;

import org.openqa.selenium.WebDriver;

import com.gmail_ebay.GmailEbay.BaseClass;
import com.pom.SingletonDesignPattern;
import com.properties.ConfigurationHelper;
import com.test_runner.TestRunner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition1 extends BaseClass{
	public static WebDriver driver = TestRunner.driver;
	SingletonDesignPattern s = new SingletonDesignPattern(driver);
	
	@Given("^user Launch The Ebay Url$")
	public void user_Launch_The_Ebay_Url() throws Throwable {
		implicitWait();
		ConfigurationHelper.getInstance();
		String url2 = ConfigurationHelper.getInstanceCR().getUrl2();
		urlLaunch(url2);
	}

	@When("^user Enter The \"([^\"]*)\" In The Search Textfield$")
	public void user_Enter_The_In_The_Search_Textfield(String arg1) throws Throwable {
		userInput(s.getEbayHomePage().getSearchBox(), arg1);

	}

	@Then("^user Click The Search Button And It Will Navigate To Electric Guitar Page$")
	public void user_Click_The_Search_Button_And_It_Will_Navigate_To_Electric_Guitar_Page() throws Throwable {
		userClick(s.getEbayHomePage().getSeachButton());
		elementText(s.getElectricGuiterPage().getFirstGuitarPrice());
	}

	@Then("^user Click The First Guitar And It Will Navigate To First Guitar Page$")
	public void user_Click_The_First_Guitar_And_It_Will_Navigate_To_First_Guitar_Page() throws Throwable {
		userClick(s.getElectricGuiterPage().getFirstGuitar());

	}

}
