/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import DashboardPage from '../../support/pageObjects/DashboardPage'
import CustomizeDashboardPage from '../../support/pageObjects/CustomizeDashboardPage'
import CreateNewGroupPage from '../../support/pageObjects/CreateNewGroupPage'

const dashboardPage = new DashboardPage()
const customizeDashboardPage = new CustomizeDashboardPage()
const createNewGroupPage = new CreateNewGroupPage()

beforeEach(() => {
    cy.fixture('UserData').then(function (data) {
        this.data = data
    })
});

// Background: Navigate to Customize Dashboard Page

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

When('user clicks on Customize Dashboard button', function () {
    dashboardPage.getCustomizedDashboard().click()
})

Then('user navigated to Customize Dashboard Page', () => {
    customizeDashboardPage.getPageWrapper().should('be.visible')
})

// Scenario: Verify user is able to create a new Group

Given('user clicks on Create New Group button', () => {
    customizeDashboardPage.getCreateNewGroupBtn().click()
})

Then('user navigated to Create New Group Page', () => {
    createNewGroupPage.getNewGroupWindow().should('be.visible')
})

When('user enters Group Name, Select Group Color, Select Accounts to be included', function () {
    createNewGroupPage.getgroupNamefield().type(this.data.groupName + "-" + new Date().getMinutes())
    createNewGroupPage.getgroupColor().click()
    createNewGroupPage.getAccountCheckBoxes().click()
})

And('user clicks on Create Group button', () => {
    createNewGroupPage.getcreateNewGroupBtn().click()
})

Then('a new Group should be created successfully', () => {
    createNewGroupPage.getSuccessMessage().should('be.visible')
    cy.reload().wait(4000)
})