Feature: Recurring internal transfer schedule starting on the weekend/holiday

    Background: Login to CU Portal
        Given user launches the CU portal
        When user enters valid UserName and Password and Clicks on Continue
        Then user should login successfully and navigate to Dashboard page

    @PlatformRegression
    Scenario: Verify user is able to schedule a recurring internal transfer starting on the weekend/holiday
        Given user clicks on Transfer Money tab and navigated to Transfer Money Page
        When user selects Sender Account and Recipient Account and clicks on Continue button
        And  user enters Amount, Date, Frequency, End Date and clicks on Continue Button
        Then user should be navigated to Review Transfer page
        When user clicks on Continue Button
        Then "Your transfer has been scheduled." message should be displayed
        When user navigated to Scheduled Transfer page and searches the scheduled transfer
        Then Transaction amount, transfer date and frequency should match with the user input
