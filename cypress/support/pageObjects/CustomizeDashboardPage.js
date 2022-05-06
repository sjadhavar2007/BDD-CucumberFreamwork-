import commonUtility from '../commonUtility'

class CustomizeDashboardPage {

    static getPageWrapper() {
        return cy.get('app-customize-dashboard-page')
    }

    static getListOfAccGroup() {
        return cy.get('app-dashboard-groups-card.mb-6')
    }

    static getGroupName() {
        return cy.get('.ml-4')
    }

    static getGroupCards() {
        return cy.get(':nth-child(1) > .flex-col')
    }

    static getfirstGroupName() {
        //return cy.get(':nth-child(1) > .flex-col > .justify-between > .ml-4')
        return this.getGroupName().first()
    }

    static getAccountGroups() {
        return this.getListOfAccGroup().find('div.p-6')
    }

    static getAccountRowCollection() {
        return this.getListOfAccGroup().find('div[dndtype="Dashboard.AccountTileInterface"]')
    }


    static getfirstaccountName() {
        return cy.xpath('//*[@id="app-root"]/app-customize-dashboard-page/div/section/app-dashboard-groups-card[1]/div/div[3]/div[1]/div/span[2]')
    }

    static getfirstAccountCurrentBalance() {
        return cy.xpath('//*[@id="app-root"]/app-customize-dashboard-page/div/section/app-dashboard-groups-card[1]/div/div[3]/div[1]/span[3]')
    }

    static getfirstAccountAvailableBalance() {
        return cy.xpath('//*[@id="app-root"]/app-customize-dashboard-page/div/section/app-dashboard-groups-card[1]/div/div[3]/div[1]/span[2]')
    }

    static getfirstcoloumName() {
        return cy.get(':nth-child(1) > .flex-col > .gap-4 > .col-span-2')
    }

    static getheader() {
        return cy.get('.header')
    }

    static getsecondAccountInTheList() {
        return cy.get(':nth-child(1) > .flex-col > [dnddropzone=""] > :nth-child(2) > .col-span-2 > .icon-color > svg')
    }

    static getfirstAccountInTheList() {
        return cy.get(':nth-child(1) > .flex-col > [dnddropzone=""] > :nth-child(1)')
    }

    static getfirstaccountdragger() {
        return cy.xpath('//body/app-root[1]/section[1]/app-customize-dashboard-page[1]/div[1]/section[1]/app-dashboard-groups-card[1]/div[1]/div[3]/div[1]/div[1]/span[1]/*[1]')
    }

    static getsecondaccountdragger() {
        return cy.get(':nth-child(1) > .flex-col > [dnddropzone=""] > :nth-child(2) > .col-span-2 > .icon-color > svg')
    }

    static getdropZone() {
        return cy.get('[data-top="303.9999938905239"]')
    }

    static getfirstAccountDetails() {
        return cy.xpath('//*[@id="app-root"]/app-customize-dashboard-page/div/section/app-dashboard-groups-card[1]/div/div[3]/div[1]/span[1]')
    }

    static getCreateNewGroupBtn() {
        return cy.get('.btn-primary')
    }

    static getfirstGroupEditIcon() {
        return cy.get('#app-root > app-customize-dashboard-page > div > section > app-dashboard-groups-card:nth-child(1) > div > div.flex.items-center.justify-between.mb-4 > button > figure')
    }

    static getAccountTilesInCustomizeDashboard(){
        return cy.get('section[class="flex flex-col ng-star-inserted"]').find('app-dashboard-groups-card').find('div[dndtype="Dashboard.AccountTileInterface"]')
    }
    static getAccDetailsfromCustomizeDashboard() {
        const listOfCutomizeDashboardAccount = [];
        this.getAccountTilesInCustomizeDashboard().each((accountTiles) => {
            const singleAccount = {};
            // cy.wrap(accountTiles)
            // .find('div.flex')
            // .invoke("text")
            // .then((val) => {
            //     singleAccount["GroupName"] = val;
            // });

            cy.wrap(accountTiles)
            .find('span.ml-2')
            .invoke("text")
            .then((val) => {
                singleAccount["AccountName"] = val;
            });

            cy.wrap(accountTiles)
            .find('span.col-start-1')
            .invoke("text")
            .then((val) => {
                singleAccount["AccountNumber"] = val;
            });

            cy.wrap(accountTiles)
            .find('span.text-success')
            .invoke("text")
            .then((val) => {
                singleAccount["AvailableBalance"] = val;
            });

            cy.wrap(accountTiles)
            .find('span[class^="text-right md:col-span-2"]')
            .invoke("text")
            .then((val) => {
                singleAccount["CurrentBalance"] = val;
            });

            cy.then(() => {
                listOfCutomizeDashboardAccount.push(singleAccount)
                //cy.log(singleAccount)
            })
        })
        .then(() => {
            return cy.wrap(listOfCutomizeDashboardAccount);
        })
    }

}

export default CustomizeDashboardPage;