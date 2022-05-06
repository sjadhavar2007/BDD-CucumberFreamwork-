Feature: Group Account

    Background: Navigate to Customize Dashboard Page
        Given   user launches the CU portal
        When    user enters valid UserName and Password and Clicks on Continue
        Then    user should login successfully and navigate to Dashboard page
        When    user clicks on Customize Dashboard button
        Then    user navigated to Customize Dashboard Page

    @PlatformRegression
    Scenario: Verify user is able to create a new Group
        Given   user clicks on Create New Group button
        Then    user navigated to Create New Group Page
        When    user enters Group Name, Select Group Color, Select Accounts to be included
        And     user clicks on Create Group button
        Then    a new Group should be created successfully