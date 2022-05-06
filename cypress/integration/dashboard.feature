Feature: Account Groups appearance in Dashboard Page

	Background: Login to CU Portal
		Given user launches the CU portal
		When user enters valid UserName and Password and Clicks on Continue
		Then user should login successfully and navigate to Dashboard page


	Scenario: Verify Accounts are showing in different Groups in Dashboard
		Given user verifies Account Groups in the Dashboard Page
		When user selects one Account tile from one visible Group
		Then the tile should display Ac Name, Ac Holder Name, Masked Ac No, SubAc ID, Available Balance and Current Balance
		When user navigated to the Customized Dashboard Page
		Then the values should match with the corresponding value in the Customized Dashboard page