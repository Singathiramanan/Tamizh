package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginEmailPage {
	public static WebDriver driver;
	public LoginEmailPage(WebDriver driver2) {
		PageFactory.initElements(driver2, this);
		this.driver = driver2;
	}
	
	@FindBy(xpath = "//input[@type='email']")
	private WebElement email;
	public WebElement getEmail() {
		return email;
	}
	
	@FindBy(xpath = "(//button[@type='button'])[3]")
	private WebElement next;
	public WebElement getNext() {
		return next;
	}
}
