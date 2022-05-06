import commonUtility from '../commonUtility'

class DashboardPage {

    static getDialogCloseBtn() {
        return cy.get('button.dialog-close')
    }

    static getDashboardHeaderTitle() {
        return cy.get('.header__title > span')
    }

    static getAccountTilesInDashboard() {
        return cy.get('section.sub-accounts-tiles').find('div:nth-child(1)').find('app-sub-account-group-card')
    }

    static getAcTileExpandToolTip() {

        return cy.get('span.tool-tip.ng-star-inserted.text-xs').contains('Expand')
    }

    static getCustomizedDashboard() {
        //return cy.get('.mat-tooltip-trigger.ml-5 > svg')
        return cy.get('div[inlinesvg*="settings.svg"]').find('svg')
    }

    static getAccountPopUp() {
        return cy.get('#app-root > app-home-page > app-dashboard-layout > table > tbody > tr > td > main > app-grid-layout > section > section > app-sub-accounts-tiles > section > div > app-sub-account-group-card:nth-child(1) > div > app-sub-account-card > app-account-quick-menu > app-quick-menu > button')
    }

    static getHideAccount() {
        return cy.get('.min-w-48 > :nth-child(3)')
    }

    static getUnhideIcon() {
        return cy.get(':nth-child(1) > .flex-col > [dnddropzone=""] > :nth-child(1) > .items-end')
    }

    static getFirstAccount() {
        return cy.get('#app-root > app-home-page > app-dashboard-layout > table > tbody > tr > td > main > app-grid-layout > section > section > app-sub-accounts-tiles > section > div > app-sub-account-group-card:nth-child(1) > div > app-sub-account-card > div > div.flex.flex-col > span')
    }

    static getPopUpMessage() {
        return cy.get('.fixed > .bg-white')
    }

    static getSecondAccount() {
        return cy.get(':nth-child(2) > .sub-account-group-card > .sub-account-group-card__sub-account-card > .card')
    }

    static getfirstAccountInTheList() {
        return cy.xpath('//*[@id="app-root"]/app-home-page/app-dashboard-layout/table/tbody/tr/td/main/app-grid-layout/section/section/app-sub-accounts-tiles/section/div/app-sub-account-group-card[1]/div/app-sub-account-card/div/div[1]/h4')
    }

    static getfirstAccountInTheListCurrentBalance() {
        return cy.get(':nth-child(1) > .sub-account-group-card > .sub-account-group-card__sub-account-card > .card > .justify-between > .text-right > .font-bold')
    }

    static getfirstAccountInTheListAvailableBalance() {
        return cy.get(':nth-child(1) > .sub-account-group-card > .sub-account-group-card__sub-account-card > .card > .justify-between > :nth-child(1) > .font-bold')
    }


    static getlogout() {
        return cy.get('[data-cy="e2e-log-out-btn"] > svg')
    }

    static gethamburgerMenu() {
        return cy.xpath('//*[@id="app-root"]/app-home-page/app-dashboard-layout/table/tbody/tr/td/app-dashboard-header/header/div/app-hamburger-menu/button/svg')
    }

    static getfirstaccountdetails() {
        return cy.xpath('//*[@id="app-root"]/app-home-page/app-dashboard-layout/table/tbody/tr/td/main/app-grid-layout/section/section/app-sub-accounts-tiles/section/div/app-sub-account-group-card[1]/div/app-sub-account-card/div/div[1]/span')
    }

    /*     getsearchAccount(){
            var searchAccount = cy.get(':nth-child(2) > .sub-account-group-card > .sub-account-group-card__sub-account-card > .card')
            return searchAccount;
        } */

    static transferMoney() {
        var transferMoney = cy.xpath("//span[contains(text(),'Transfer Money')]");
        return transferMoney;
    }

    static getAccDetailsfromDashboard() {
        const listOfAccounts = [];

        this.getAccountTilesInDashboard().each((accountTiles) => {
            const singleAccount = {};

            //Retrive Group Name
            cy.wrap(accountTiles)
                .find('span.inline-block')
                .invoke("text")
                .then((val) => {
                    singleAccount["GroupName"] = val;
                });

            //Retrive Account Name
            cy.wrap(accountTiles)
                .find('div.card.flex-col')
                .find('div.flex.flex-col')
                .find('h4.text-md2')
                .invoke("text")
                .then((val) => {
                    singleAccount["AccountName"] = val;
                });

            //Retrive Account Number
            cy.wrap(accountTiles)
                .find('div.card.flex-col')
                .children('div.flex.flex-col')
                .find('span.text-xs.text-typo-secondary')
                .invoke("text")
                .then((val) => {
                    singleAccount["AccountNumber"] = val;
                });

            //Retrive Available Balance
            cy.wrap(accountTiles)
                .find('div.card.flex-col')
                .children('div.ng-star-inserted')
                .find('span.text-success.amount')
                .invoke("text")
                .then((val) => {
                    singleAccount["AvailableBalance"] = val;
                });

            //Retrive Current Balance
            cy.wrap(accountTiles)
                .find('div.card.flex-col')
                .children('div.ng-star-inserted')
                .find('div.text-right')
                .find('span.amount')
                .invoke("text")
                .then((val) => {
                    singleAccount["CurrentBalance"] = val;
                });

            // Now push to list
            cy.then(() => {
                listOfAccounts.push(singleAccount)
            })
        })
            .then(() => {
                return cy.wrap(listOfAccounts);
            })
    }

}

export default DashboardPage;