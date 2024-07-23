/// <reference types="cypress" />

/**
 * @description The items in the Sign in page
 */
class SignIn {
    // Define locators or data-testid attributes for page elements
    constructor() {  
      this.signInText = '.topaz-c-bZceJU-kuVbss-size-6';
      this.emailInput = '[data-testid="auth.signIn.emailInput"]';
      this.passwordInput = '[data-testid="auth.signIn.passwordInput"]';
      this.signInButton = '[data-testid="auth.signIn.submitButton"]';
    }
}
const signIn = new SignIn();

export function verifylogInPage(){
    // Verify that the side panel is displaying by checking the header text
    cy.get(signIn.signInText).should('contain', 'Sign in to Tango');
};
export function typeEmail(email){
    // Verify that the side panel is displaying
    cy.get(signIn.emailInput).click().type(email);
};
export function typePassword(password){
    // Verify that the side panel is displaying
    cy.get(signIn.passwordInput).click().type(password);
};
export function clickSignInButton(){
    // Verify that the side panel is displaying
    cy.get(signIn.signInButton).click();
};
