///<reference types="Cypress" />

class TransferMoneyPage {

    selectAccountHeaderText() {
        return cy.xpath("//span[contains(text(),'Select an account you want to send from')]")
    }
    static selectInternalTransferAccount() {
        var selectInternalTransferAccount = cy.get('ul.list-none').find('app-account-card.rounded-15')
        return selectInternalTransferAccount;
    }

    static selectInternalTransferAccounts(){
        const listOfTransferMoneyAccount = [];

        this.selectInternalTransferAccount().each((accountTiles) => {
            const singleAccount = {};

            cy.wrap(accountTiles)
            .find('h3.text-md2')
            .invoke('text')
            .then((val) => {
                singleAccount["AccountName"] = val;
            });

            cy.wrap(accountTiles)
            .find('h4.text-xs')
            .invoke('text')
            .then((val) => {
                singleAccount["AccountNumber"] = val;
            });

            cy.wrap(accountTiles)
            .find('span.text-success')
            .invoke('text')
            .then((val) => {
                singleAccount["AvailableBalance"] = val;
            });

            cy.wrap(accountTiles)
            .find('span.text-right > span.font-bold')
            .invoke('text')
            .then((val) => {
                singleAccount["CurrentBalance"] = val;
            });

            cy.then(() => {
                listOfTransferMoneyAccount.push(singleAccount)
                //cy.log(singleAccount)
            })
        })
        .then(() => {
            return cy.wrap(listOfTransferMoneyAccount);
        })
    }




    selectInternalTransfer() {
        var selectInternalTransfer = cy.get('app-from-accounts-list').find('ul[data-cy="e2e-internal-accounts-list"]')
        return selectInternalTransfer;
    }
    selectInternalTransfer2() {
        var selectInternalTransfer2 = cy.get('app-to-accounts-list').find('ul[data-cy="e2e-internal-accounts-list"]')
        return selectInternalTransfer2;
    }
    continueBtn() {
        var continueBtn = cy.xpath("//button[contains(text(),'Continue')]");
        return continueBtn;
    }
    enterAmount() {
        var enterAmount = cy.get('[data-cy="e2e-amount-input"]')
        return enterAmount;
    }
    enterStartDate() {
        var enterStartDate = cy.get('#mat-input-1')
        return enterStartDate;
    }

    selectFrequecy() {
        var selectFrequecy = cy.xpath('//select[@formcontrolname="frequency"]');
        return selectFrequecy;
    }
    enterEndDate() {
        var enterEndDate = cy.get('#mat-input-3')
        return enterEndDate;
    }
    continueButton() {
        var continueButton = cy.get('[data-cy="e2e-continue-button"]')
        return continueButton;
    }

    reviewTransferHeader(){
        return cy.xpath("//h3[contains(text(),'Please review below transfer information')]")
    }

    confirmationMessage(){
        return cy.get('[data-cy="e2e-confirmation-message"]')
    }


    showTable() {
        var showTable = cy.get('.mat-table')
        return showTable;
    }
}
export default TransferMoneyPage;