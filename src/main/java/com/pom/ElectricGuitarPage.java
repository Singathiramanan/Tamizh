package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ElectricGuitarPage {
	public WebDriver driver;
	public ElectricGuitarPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	
	@FindBy(xpath = "(//span[@class='s-item__price'])[2]")
	private WebElement firstGuitarprice;
	public WebElement getFirstGuitarPrice() {
		return firstGuitarprice;
	}
	
	@FindBy(xpath = "(//a[@target='_blank'])[4]")
	private WebElement firstGuitar;
	public WebElement getFirstGuitar() {
		return firstGuitar;
	}
}
