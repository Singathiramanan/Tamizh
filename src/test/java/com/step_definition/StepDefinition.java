package com.step_definition;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.gmail_ebay.GmailEbay.BaseClass;
import com.pom.SingletonDesignPattern;
import com.properties.ConfigurationHelper;
import com.test_runner.TestRunner;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass {
	public static WebDriver driver = TestRunner.driver;
	SingletonDesignPattern s = new SingletonDesignPattern(driver);
	

	@Given("^user Launch The Url$")
	public void user_Launch_The_Url() throws Throwable {
		String url1 = ConfigurationHelper.getInstance().getInstanceCR().getUrl1();
		urlLaunch(url1);
	}

	@When("^user Enter The \"([^\"]*)\" In The Email Textfield$")
	public void user_Enter_The_In_The_Email_Textfield(String email) throws Throwable {
		userInput(s.getLoginEmailPage().getEmail(), email);
	}

	@Then("^user Click The Next Button And It Will Navigate To Login Password Page$")
	public void user_Click_The_Next_Button_And_It_Will_Navigate_To_Login_Password_Page() throws Throwable {
		userClick(s.getLoginEmailPage().getNext());
	}

	@When("^user Enter The \"([^\"]*)\" In The Password Textfield$")
	public void user_Enter_The_In_The_Password_Textfield(String password) throws Throwable {
		explicitWait(s.getLoginPasswordPage().getPassword());
		userInput(s.getLoginPasswordPage().getPassword(), password);
	}

	@Then("^user Click The Next Button And It Will Navigate To Google Account Page$")
	public void user_Click_The_Next_Button_And_It_Will_Navigate_To_Google_Account_Page() throws Throwable {
		userClick(s.getLoginPasswordPage().getLogin());
		implicitWait();
	}

	
}
