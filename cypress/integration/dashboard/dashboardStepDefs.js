/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import dashboardPage from '../../support/pageObjects/DashboardPage';
import CustomizeDashboardPage from "../../support/pageObjects/CustomizeDashboardPage";
import commonUtility from '../../support/commonUtility'

var listOfAccounts = [];
var singleAccount = {};
var listOfCutomizeDashboardAccount = [];
var UserData;
beforeEach(() => {
    cy.fixture('UserData').then(function (data) {
        this.data = data
    })
    cy.fixture('UserData').then(function (data) {
        UserData = data.AccountNumber
    })
});

// Background: Login to CU Portal

Given('user launches the CU portal', () => {
    cy.viewport(1920, 1100)
    cy.visit(Cypress.env('url'))
})

When('user enters valid UserName and Password and Clicks on Continue', function () {
    cy.login(this.data.UserName, this.data.Password)
})

Then('user should login successfully and navigate to Dashboard page', () => {
    dashboardPage.getDashboardHeaderTitle().should('have.text', 'Dashboard')
})

// Scenario: Verify Accounts are showing in different Groups in Dashboard

Given('user verifies Account Groups in the Dashboard Page', function () {
    cy.getAccDetailsfromDashboard().then(listOfAc => {
        cy.log(listOfAc)
        listOfAccounts = listOfAc;
        for (const element of listOfAccounts) {
            assert.isNotNull(element["GroupName"], 'is not null')
        }
    })
})

When('user selects one Account tile from one visible Group', function () {
    for (const element of listOfAccounts) {
        if (element["AccountNumber"] == this.data.AccountNumber) {
            singleAccount = element;
        }
    }
    cy.then(() => {
        assert.isNotNull(singleAccount, 'is not null')
    })

})

Then('the tile should display Ac Name, Ac Holder Name, Masked Ac No, SubAc ID, Available Balance and Current Balance', () => {
    assert.isNotNull(singleAccount["AccountName"], 'is not null')
    assert.isNotNull(singleAccount["AccountNumber"], 'is not null')
    assert.isNotNull(singleAccount["AvailableBalance"], 'is not null')
    assert.isNotNull(singleAccount["CurrentBalance"], 'is not null')
})

When('user navigated to the Customized Dashboard Page', function () {
    dashboardPage.getCustomizedDashboard().click()
})

Then('the values should match with the corresponding value in the Customized Dashboard page', () => {
    cy.getAccDetailsfromCustomizeDashboard().then((listOfacc) => {
        listOfCutomizeDashboardAccount = listOfacc;
        for (const element of listOfCutomizeDashboardAccount) {
            if(element["AccountNumber"] == UserData){
                assert.equal(element["AccountName"], singleAccount["AccountName"])
                assert.equal(element["AccountNumber"], singleAccount["AccountNumber"])
                assert.equal(element["AvailableBalance"], singleAccount["AvailableBalance"])
                assert.equal(element["CurrentBalance"], singleAccount["CurrentBalance"])
            }
            
        }
    })
})
