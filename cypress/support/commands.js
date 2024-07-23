import { clickSignInButton, typeEmail, typePassword, verifylogInPage } from "../pages/signIn";
import { tangoTestWs } from "../fixtures/login_info";
/**
 * @description Enters the login information the sign in form
 * @param {String} email
 * @param {String} password
 */
Cypress.Commands.add('signIn', (email, password) => { 
	cy.log('Sign in to the Workspace');
  // Verify that the login page displays 
  verifylogInPage();
  // Type in the email
  typeEmail(tangoTestWs.email);
  // Waiting for the password field to load
  cy.wait(1000);
  // Type in the password
  typePassword(tangoTestWs.password);
  // Click on the Sign in button
  clickSignInButton();
  // Waiting to the user to log in
  cy.wait(3000);
  // Verify that the user is signed in by checking the url
  cy.url().should('include', 'app.tango.us/')
})