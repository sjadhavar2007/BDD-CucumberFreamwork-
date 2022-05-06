/// <reference types="Cypress" />
import loginPage from '../support/pageObjects/LoginPage'
import dashboardPage from '../support/pageObjects/DashboardPage'
import CustomizeDashboardPage from '../support/pageObjects/CustomizeDashboardPage'
import TransferMoneyPage from '../support/pageObjects/TransferMoneyPage'
import commonUtility from '../support/commonUtility'

Cypress.Commands.add("login", (userName, password) => {
  loginPage.getUserName().type(userName)
  loginPage.getPassword().type(password)
  loginPage.getContinueBtn().click()
  cy.wait(3000)
  dashboardPage.getDialogCloseBtn().should('be.visible').click()
  cy.wait(1000)
})

Cypress.Commands.add("getAccDetailsfromDashboard", () => {
  dashboardPage.getAccDetailsfromDashboard()
})

Cypress.Commands.add("getAccDetailsfromCustomizeDashboard", () => {
  CustomizeDashboardPage.getAccDetailsfromCustomizeDashboard()
})
Cypress.Commands.add("selectInternalTransferAccounts", () => {
  TransferMoneyPage.selectInternalTransferAccounts()
})

Cypress.Commands.add("isElementExists", (selector) => {
  cy.get('body.ng-tns-0-2').then(($body) => {
    if ($body.find(selector).length > 0) {
      return true;
    } else {
      return false;
    }
  })
})
