/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../support/pageObjects/LoginPage'

const loginPage = new LoginPage()

beforeEach(() => {
    cy.fixture('UserData').then(function (data) {
        this.data = data
    })
});

// Background: Launch CU Portal

Given('user launches the CU portal', () => {
    cy.viewport(1920, 1100)
    cy.visit(Cypress.env('url'))
})

// Verify the Privacy Policy Link on the Login Page

Given('user searches for a Privacy Policy Link', () => {
    loginPage.getPrivacyPolicyLink().should('be.visible')
})

And('user clicks on the Privacy Policy link', () => {
    loginPage.getPrivacyPolicyLink().invoke('removeAttr', 'target').click()
})

Then('the privacy policy should open in a new browser tab', () => {
    cy.wait(3000)
})

And('the Privacy Policy Url should match with the url configured in the Admin portal', function() {
    cy.url().should('eq', this.data.PrivacyPolicyURL)
})

//Verify the Terms of Service Link Link on the Login Page

Given('user searches for a Terms of Service Link', () => {
    loginPage.getTermsofServiceLink().should('be.visible')
})

And('user clicks on the Terms of Service Link', () => {
    loginPage.getTermsofServiceLink().invoke('removeAttr', 'target').click()
})

Then('the Terms of Service document should open in a new browser tab', () => {
    cy.wait(3000)
})

And('the Terms of Service Url should match with the url configured in the Admin portal', function() {
    cy.url().should('eq', this.data.TermsConditionURL)
})

//Verify the FAQ Link on the Login Page

Given('user searches for a FAQ Link', () => {
    loginPage.getFAQLink().should('be.visible')
})

And('user clicks on the FAQ Link', () => {
    loginPage.getFAQLink().invoke('removeAttr', 'target').click()
})

Then('the FAQ document should open in a new browser tab', () => {
    cy.wait(4000)
})

And('the FAQ Url should match with the url configured in the Admin portal', function() {
    cy.url().should('eq', this.data.FAQURL)
})

//Verify the Join Link on the Login Page

Given('user searches for a Join Link', () => {
    loginPage.getJoinLink().should('be.visible')
})

And('user clicks on the Join Link', () => {
    loginPage.getJoinLink().click()
})

Then('user should be navigated to Apply Form window', () => {
    cy.wait(3000)
    cy.title().should('contain','Welcome to SIU Credit Union')
})