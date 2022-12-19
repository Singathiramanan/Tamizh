package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPasswordPage {
	public static WebDriver driver;
	public LoginPasswordPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	
	@FindBy(xpath = "//input[@type='password']")
	private WebElement password;
	public WebElement getPassword() {
		return password;
	}
	
	@FindBy(xpath = "(//button[@type='button'])[2]")
	private WebElement login;
	public WebElement getLogin() {
		return login;
	}
}
