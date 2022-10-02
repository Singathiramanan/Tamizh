package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class SingletonDesignPattern {
	public static WebDriver driver;
	public SingletonDesignPattern(WebDriver driver2) {
		PageFactory.initElements(driver2, this);
		SingletonDesignPattern.driver = driver2;
	}
	
	public LoginEmailPage getLoginEmailPage() {
		LoginEmailPage lep = new LoginEmailPage(driver);
		return lep;
	}
	
	public LoginPasswordPage getLoginPasswordPage() {
		LoginPasswordPage lpp = new LoginPasswordPage(driver);
		return lpp;
	}
	
	public EbayHomePage getEbayHomePage() {
		EbayHomePage ehp = new EbayHomePage(driver);
		return ehp;
	}
	
	public ElectricGuitarPage getElectricGuiterPage() {
		ElectricGuitarPage egp = new ElectricGuitarPage(driver);
		return egp;
	}
}
