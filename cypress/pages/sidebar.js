/// <reference types="cypress" />

/**
 * @description The items in the Sidebar Menu on the left
 */
class SidebarMenu {
    // Define locators or data-testid attributes for page elements
    constructor() {  
        this.sidebar = '.topaz-c-gqwkJN-icGHBGb-css';
        this.workspaceSwitcher = '[data-testid="shared.workspaceSwitcher.dropdownTrigger"]';
        this.logOut = '.topaz-c-cKDnOT-ilaCDBP-css';
        this.inviteMemberButton = '[data-testid="shared.navigation.inviteMemberButton"]';
        this.search = '.topaz-c-fVXuSo';
        this.settingsAndMembers = '[data-testid="shared.sidebar.settings"]';
        this.whatsNew = '[data-testid="shared.sidebar.whatsNewButton"]';
        this.drafts = '[data-testid="shared.navigation.draftsMenuItem"]';
        this.sharedWithMe = '[data-testid="shared.navigation.sharedWithMeMenuItem"]';
        this.starred = '[data-testid="shared.navigation.starredWorkflowsMenuItem"]';
        this.teamLibrary = '[data-testid="shared.navigation.newTeamFolderButton"]';
        this.trash = '[data-testid="shared.navigation.trashMenuItem"]';
    }
}
const sidebarMenu = new SidebarMenu();

export function openWorkspaceSwitcher(){
    cy.get(sidebarMenu.workspaceSwitcher).click({force: true});
}

export function verifyWorkspaceSwitcher(){
    cy.get(sidebarMenu.workspaceSwitcher).should('be.visible');
}

export function logOut(){
    cy.get(sidebarMenu.logOut).click({force: true});
}

export function verifySidebar(){
    // Verify that the side panel is displaying
    cy.get(sidebarMenu.sidebar).should('be.visible');
};

export function verifyInviteTeammates (){
    cy.get(sidebarMenu.inviteMemberButton).click();
}

export function verifySearch (){
    cy.get(sidebarMenu.search)
        .contains('Search')
        .eq(0)
        .should('be.visible');
}

export function verifySettingsAndMembers (){
    cy.get(sidebarMenu.search).should('be.visible');
}

export function verifyWhatsNew (){
    cy.get(sidebarMenu.whatsNew).should('be.visible');
}

export function verifyDrafts (){
    cy.get(sidebarMenu.drafts).should('be.visible');
}

export function clickDrafts (){
    cy.get(sidebarMenu.drafts).click({force : true});
}

export function verifySharedWithMe (){
    cy.get(sidebarMenu.sharedWithMe).should('be.visible');
}

export function verifyStarred (){
    cy.get(sidebarMenu.starred).should('be.visible');
}

export function verifyTeamLibrary(){
    cy.get(sidebarMenu.teamLibrary).should('be.visible');
}

export function verifyTrash(){
    cy.get(sidebarMenu.trash).should('be.visible');
}
