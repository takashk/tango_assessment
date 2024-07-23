/// <reference types="cypress" />
import { tangoTestWs } from "../fixtures/login_info";
import { clickCancelDuplicateWorkFlowModal, clickDisplayMenu, drafts, selectDisplayOptions, selectDraftOptions } from "../pages/drafts";
import { clickDrafts, logOut, openWorkspaceSwitcher, verifySidebar } from "../pages/sidebar";

const { domain, email, password } = tangoTestWs;

describe('Tango Drafts test', () => {
  beforeEach('Sign in to the Tango Website', () => {
    // Navigate to the Tango Sign in Page
    cy.visit(domain);
    // Login as a user
    cy.signIn(email, password);
  });

    afterEach('Sign out of the Workspace', () => {
        // Click on the User's Workspace dropdown
        openWorkspaceSwitcher();
        // Click on the Logout button
        logOut();
    });

    it('display options for the Drafts can be changed', () => {
        // Verify that the side panel is displaying
        verifySidebar();
        // Click on Drafts in the openSidebar menu
        clickDrafts();
        // In the Drafts page, Click on the Display menu
       clickDisplayMenu();
        // Verify that the Display options appear
        cy.get(drafts.displayOptions).contains('Cards');
        // Click on the List display option
        selectDisplayOptions('List');
        // Click on the Drafts page to close the Display dropdown
        cy.get(drafts.draftsPage).click({force: true});
        // Verify that the Drafts display in lists view by grabbing the date field that only displays in the lists view
        cy.get(drafts.listsDate).should('be.visible');
    });
    it('is able to duplicate Drafts', () => {
        // Verify that the side panel is displaying
        verifySidebar();
        cy.wait(2000);
        // Click on Drafts in the openSidebar menu
        clickDrafts();
        // Hover over the draft
        cy.get(drafts.draftCard).trigger('mouseover');
        // In the Drafts page, Click on the ... menu
        cy.get(drafts.draft).trigger('mouseover').click({force: true});
        cy.wait(1000);
        cy.get(drafts.draftMenu).click({ force: true });
        cy.wait(1000);
        // Select the Duplicate option
        selectDraftOptions('Duplicate');
        // Verify that the UI elements on the Duplicate Workflow modal displays
        cy.get(drafts.duplicateWorkflowModalText).should('be.visible');
        cy.get(drafts.duplicateWorkflowModalConfirmButton).should('be.visible');
        // Cancel out of the modal
        clickCancelDuplicateWorkFlowModal();
    });
});