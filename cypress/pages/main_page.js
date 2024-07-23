/// <reference types="cypress" />

/**
 * @description The button items in the Tango website top right corner
 */
class MainPageElements {
    constructor() {  
        this.installExtentionButton = '[data-testid="header.installExtensionButton"]';
        this.newTangoButton = '[data-testid="header.captureWorkflowButton"]';
        this.userInitialsButton = '[data-testid="header.userDropdownButton"]';
        this.mainContentPage = '#main-content';
    }
}
export const mainPageElements = new MainPageElements();

export function verifyNewTangoButton(){
    cy.get(mainPageElements.newTangoButton).should('be.visible');
}

export function verifyUserInitialButton(){
    cy.get(mainPageElements.userInitialsButton).should('be.visible');
}
