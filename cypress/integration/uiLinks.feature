Feature: UI Links on the Login Page of CU Portal

	Background: Launch CU Portal
		Given user launches the CU portal

	@PlatformRegression
	Scenario: Verify the Privacy Policy Link on the Login Page
		Given user searches for a Privacy Policy Link
		And user clicks on the Privacy Policy link
		Then the privacy policy should open in a new browser tab
		And the Privacy Policy Url should match with the url configured in the Admin portal

	@PlatformRegression
	Scenario: Verify the Terms of Service Link on the Login Page
		Given user searches for a Terms of Service Link
		And user clicks on the Terms of Service Link
		Then the Terms of Service document should open in a new browser tab
		And the Terms of Service Url should match with the url configured in the Admin portal

	@PlatformRegression
	Scenario: Verify the FAQ Link on the Login Page
		Given user searches for a FAQ Link
		And user clicks on the FAQ Link
		Then the FAQ document should open in a new browser tab
		And the FAQ Url should match with the url configured in the Admin portal

	@PlatformRegression
	Scenario: Verify the Join Link on the Login Page
		Given user searches for a Join Link
		And user clicks on the Join Link
		Then user should be navigated to Apply Form window