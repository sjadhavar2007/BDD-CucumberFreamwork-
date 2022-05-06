class TransactionPage {
    getDownloadBtn() {
        return cy.get('.flex-col > .justify-end > :nth-child(2)')
    }
    getOpenCalendar() {
        return cy.get('[class="mat-focus-indicator mat-icon-button mat-button-base"]')
    }
    getDate() {
        return cy.get('#mat-datepicker-14 > mat-calendar-header > div > div > button.mat-focus-indicator.mat-calendar-period-button.mat-button.mat-button-base > span.mat-button-wrapper > svg > polygon')
    }
}

export default TransactionPage