class TransactionHistoryPage {
    
    getAccountGroups() {
        return cy.get('app-tiles-group').find('div.tiles-group')
    }

    getAccountListsOfFirstGroup(){
        return this.getAccountGroups().first().find('div.ng-star-inserted').find('app-sub-account-card')
    }

    NoMoreData() {
        var NoMoreData = cy.get('app-infinite-scroll.ng-star-inserted > .justify-center')
        return NoMoreData;
    }
    availableBalance() {
        var availableBalance = cy.get('.mb-3 > .text-md3')
        return availableBalance;
    }
    currentBalance() {
        var currentBalance = cy.get('.balance__amount > .text-md2')
        return currentBalance;
    }
    graph() {
        var graph = cy.get('.chartjs-render-monitor')
        return graph;
    }
    searchAllcategoryAlltime() {
        var searchAllcategoryAlltime = cy.get('.search')
        return searchAllcategoryAlltime;
    }
    search() {
        var search = cy.get('[data-test="search-field-input"]')
        return search;
    }
    allCategory() {
        var allCategory = cy.get('.mat-menu-trigger > .icon-color > svg > path')
        return allCategory;
    }
    allTime() {
        var allTime = cy.get('.mat-form-field-infix > .inline-flex > .icon-color > svg')
        return allTime;
    }
    clickOnLeftSideOtherAccount() {
        var clickOnLeftSideOtherAccount = cy.get(':nth-child(3) > .card')
        return clickOnLeftSideOtherAccount;
    }
    noTransction() {
        var noTransction = cy.get('app-my-finance-history-table.ng-star-inserted > .ng-star-inserted > .flex > .text-md2')
        return noTransction;
    }
    transctionTable() {
        var transctionTable = cy.get('.mat-table')
        return transctionTable;
    }
    clickOnOtherAccount() {
        var clickOnOtherAccount = cy.get('.tiles-group--expanded > .py-2')
        return clickOnOtherAccount;
    }
    clickOnOtherAccount2() {
        var clickOnOtherAccount2 = cy.get(':nth-child(1) > .card')
        return clickOnOtherAccount2;
    }
}
export default TransactionHistoryPage;