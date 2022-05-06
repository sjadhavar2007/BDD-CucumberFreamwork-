class AdminLoginPage {

    getEmailAddress() {
        return cy.get('#Email')
    }

    getPassword() {
        return cy.get('#Password')
    }

    getSignInBtn() {
        return cy.get('.btn-primary')
    }

}

export default AdminLoginPage;