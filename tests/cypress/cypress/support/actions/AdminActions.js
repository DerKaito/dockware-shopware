export default class AdminActions {

    /**
     *
     */
    login() {
        cy.visit('/admin');
        cy.get('#sw-field--username').type('admin');
        cy.get('#sw-field--password').type('shopware');
        cy.get('.mt-button').click();
    }

}
