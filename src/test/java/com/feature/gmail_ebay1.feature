@second
Feature: Ebay Task
@ebay
Scenario: Ebay Home Page 
	Given user Launch The Ebay Url
	When user Enter The "electric guitar" In The Search Textfield 
	Then user Click The Search Button And It Will Navigate To Electric Guitar Page

@ebay
 Scenario: Electric Guitar Page
     Then user Click The First Guitar And It Will Navigate To First Guitar Page