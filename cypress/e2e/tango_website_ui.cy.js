/// <reference types="cypress" />

import { tangoTestWs } from "../fixtures/login_info";
import { logOut, openWorkspaceSwitcher, verifyDrafts, verifyInviteTeammates, verifySearch, verifySettingsAndMembers, verifySharedWithMe, verifySidebar, verifyStarred, verifyWhatsNew, verifyWorkspaceSwitcher } from "../pages/sidebar";
import { verifyNewTangoButton, verifyUserInitialButton } from "../pages/main_page";

const { domain, email, password } = tangoTestWs;

describe('Tango UI test', () => {
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

  it('displays all the sidebar UI elements on sign in', () => {
    // Verify that the side panel on the left is displaying
    verifySidebar();
    // Verify that the workspace switcher is displaying
    verifyWorkspaceSwitcher();
    // Verify that the Invite teammates button is displaying
    verifyInviteTeammates();
    // Verify that the Search option is displaying
    verifySearch();
    // Verify that the Settings and members option is displaying
    verifySettingsAndMembers();
    // Verify that the What's new option is displaying
    verifyWhatsNew();
    // Verify that the Drafts option is displaying
    verifyDrafts();
    // Verify that the Shared with me option is displaying
    verifySharedWithMe();
    // Verify that the Starred option is displaying
    verifyStarred();
    // Verify Team Library is displaying


  });
  it('displays all the buttons on the top right corner', () => {
    // Verify that the button on the top right is displaying (as a user that has the tango Extention installed)
    verifyNewTangoButton();
    // Verify that the username initials on the top right is displaying
    verifyUserInitialButton();
  });
})