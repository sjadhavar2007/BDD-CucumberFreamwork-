/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import dashboardPage from '../../support/pageObjects/DashboardPage'
//import CustomizeDashboardPage from '../../support/pageObjects/CustomizeDashboardPage'
import TransferMoneyPage from '../../support/pageObjects/TransferMoneyPage'

//const dashboardPage = new DashboardPage()
//const customizeDashboardPage = new CustomizeDashboardPage()
const transferMoneyPage = new TransferMoneyPage()
var listOfAccounts = [];
var singleAccount = {};
var listofTransferMoneyAccounts = [];
beforeEach(() => {
    cy.fixture('UserData').then(function (data) {
        this.data = data
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


// Scenario: Verify user is able to schedule a recurring internal transfer starting on the weekend/holiday

Given('user clicks on Transfer Money tab and navigated to Transfer Money Page', function () {
    dashboardPage.transferMoney().should('be.visible').contains(' Transfer Money ').click()
    transferMoneyPage.selectAccountHeaderText().should('be.visible')
})

When('user selects Sender Account and Recipient Account and clicks on Continue button', function () {
    cy.selectInternalTransferAccounts().then((listofAccounts) => {
        listofTransferMoneyAccounts = listofAccounts
        for (const element of listofTransferMoneyAccounts) {
            if (element["AccountNumber"] == this.data.TransferMoneyFromAcc) {
                singleAccount = element;
            }
        }
        cy.then(() => {
            transferMoneyPage.selectInternalTransfer().contains(singleAccount["AccountNumber"]).click() 
        })
    })

    cy.selectInternalTransferAccounts().then((listofAccounts) => {
        listofTransferMoneyAccounts = listofAccounts
        for (const element of listofTransferMoneyAccounts) {
            if (element["AccountNumber"] == this.data.TransferMoneyTOAcc) {
                singleAccount = element;
            }
        }
        cy.then(() => {
            transferMoneyPage.selectInternalTransfer2().contains(singleAccount["AccountNumber"]).click() 
        })
    })

    //transferMoneyPage.selectInternalTransfer2().should('be.visible').click()
    transferMoneyPage.continueBtn().should('be.visible').click()
})

And('user enters Amount, Date, Frequency, End Date and clicks on Continue Button', function () {
    transferMoneyPage.enterAmount().clear().type(this.data.amount).then(function (result) {
        expect(result.val()).to.equal(this.data.amount)
    })
    transferMoneyPage.enterStartDate().clear().type(this.data.startDate).should('be.visible')
    transferMoneyPage.selectFrequecy().should('be.visible').select(this.data.frequency).contains(this.data.frequency)
    transferMoneyPage.enterEndDate().clear().type(this.data.endDate).should('be.visible')
    transferMoneyPage.continueButton().should('be.visible').click()
})

Then('user should be navigated to Review Transfer page', function () {
    transferMoneyPage.reviewTransferHeader().should('be.visible')
})

When('user clicks on Continue Button', () => {
    transferMoneyPage.continueButton().should('be.visible').click()
})

Then('{string} message should be displayed', function (ConfirmationMsg) {
    transferMoneyPage.confirmationMessage().should('be.visible').invoke('text').then(function (data) {
        expect(data).to.contain(ConfirmationMsg)
    })
})

When('user navigated to Scheduled Transfer page and searches the scheduled transfer', () => {
    cy.url().should('include', '/scheduled')
    
})

Then('Transaction amount, transfer date and frequency should match with the user input', function () {

})