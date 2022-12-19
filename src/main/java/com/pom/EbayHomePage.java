package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EbayHomePage {
	public static WebDriver driver;
	public EbayHomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	
	@FindBy(xpath = "//input[@type='text']")
	private WebElement searchBox;
	public WebElement getSearchBox() {
		return searchBox;
	}
	
	@FindBy(xpath = "//input[@value='Search']")
	private WebElement seachButton;
	public WebElement getSeachButton() {
		return seachButton;
	}
	
}
