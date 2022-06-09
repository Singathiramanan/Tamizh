package com.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	public static Properties p;
	public ConfigurationReader() throws IOException {
		File f = new File("C:\\Users\\tamizh\\eclipse-workspace\\GmailEbay\\src\\main\\java\\com\\properties\\email.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
	}
	
	public String getBowser() {
		String browser = p.getProperty("browser");
		return browser;
	}
	
	public String getUrl1() {
		String url1 = p.getProperty("url1");
		return url1;
	}
	
	public String getUrl2() {
		String url2 = p.getProperty("url2");
		return url2;
	}
}
