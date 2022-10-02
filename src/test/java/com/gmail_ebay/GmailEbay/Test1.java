package com.gmail_ebay.GmailEbay;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.pom.SingletonDesignPattern;
import com.properties.ConfigurationHelper;

public class Test1 extends BaseClass {
	public static WebDriver driver;
	public static void main(String[] args) throws IOException, InterruptedException {
		ConfigurationHelper.getInstance();
		String bowser = ConfigurationHelper.getInstanceCR().getBowser();
		driver= driverLaunch(bowser);
		ConfigurationHelper.getInstance();
		String url1 = ConfigurationHelper.getInstanceCR().getUrl1();
		urlLaunch(url1);
		SingletonDesignPattern s = new SingletonDesignPattern(driver);
		userInput(s.getLoginEmailPage().getEmail(), "automation.test1402");
		userClick(s.getLoginEmailPage().getNext());
		explicitWait(s.getLoginPasswordPage().getPassword());
		userInput(s.getLoginPasswordPage().getPassword(), "S3l1n1um");
		userClick(s.getLoginPasswordPage().getLogin());
		implicitWait();
		ConfigurationHelper.getInstance();
		String url2 = ConfigurationHelper.getInstanceCR().getUrl2();
		urlLaunch(url2);
		userInput(s.getEbayHomePage().getSearchBox(), "electric uitar");
		userClick(s.getEbayHomePage().getSeachButton());
		
		elementText(s.getElectricGuiterPage().getFirstGuitarPrice());
		userClick(s.getElectricGuiterPage().getFirstGuitar());
		
	}
	
	
}
