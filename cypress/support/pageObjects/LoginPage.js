class LoginPage {

    static getUserName() {
        return cy.get('#username')
    }

    static getPassword() {
        return cy.get('#password')
    }

    static getRememberDevice() {
        return cy.get('.mat-checkbox-inner-container')

    }

    static getForgotPassword() {
        return cy.get('app-forgot-password > .btn-text')
    }

    static getContinueBtn() {
        return cy.get('.btn-primary')
    }


    static getPrivacyPolicyLink() {
        return cy.get('[data-param="privacyLink"] .btn-text:visible')
    }

    static getTermsofServiceLink() {
        return cy.get('[data-param="termsLink"] .btn-text:visible')
    }

    static getFAQLink() {
        return cy.get('.sign-in-page__footer > .ng-star-inserted')
    }

    static getJoinLink() {
        return cy.get('.ml-5')
    }

    static getloginScreen() {
        return cy.xpath('//*[@id="app-root"]/app-sign-in-page/app-background-layout/main/section')
    }

}

export default LoginPage;