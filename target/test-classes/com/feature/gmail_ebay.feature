Feature: Gmail Task 
@gmail
Scenario Outline: Login Email Page 
	Given user Launch The Url 
	When user Enter The "<email>" In The Email Textfield 
	Then user Click The Next Button And It Will Navigate To Login Password Page 
	
	Examples: 
		|email|
		|java123|
		|selenium123|
		|automation.test1402|
		
@gmail		
Scenario Outline: Login Password Page 
	When user Enter The "<password>" In The Password Textfield 
	Then user Click The Next Button And It Will Navigate To Google Account Page 
	
	Examples: 
		|password|
		|S3l1n1um|
		
