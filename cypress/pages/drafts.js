/// <reference types="cypress" />
/**
 * @description The items in the Drafts Page
 */
export class Drafts {
    // Define locators or data-testid attributes for page elements
    constructor() {  
      this.displayDropdown = '.topaz-c-gJqgM-icVjUXC-css';
      this.displayOptions = '.topaz-c-gqwkJN-ifGHEql-css';
      this.draftsPage = '.PJLV-iivMNBN-css';
      this.listsDate = '.topaz-c-boKpDw-igsXdEb-css';
      this.draftCard = '.PJLV-igKNJlc-css';
      this.draft = '.topaz-c-gqwkJN-iCbJno-css';
      this.draftMenu = '[data-testid="workflowsList.list.workflowActions.trigger"]'
      this.draftOptions = '.topaz-c-cKDnOT-ikjEOAA-css';
      this.duplicateWorkflowModalText = '.topaz-c-bZceJU-ihaxWh-css';
      this.duplicateWorkflowModalConfirmButton = '[data-testid="shared.modals.duplicateWorkflowModal.confirmButton"]';
      this.duplicateWorkflowModalCancelButton = '[data-testid="shared.modals.duplicateWorkflowModal.cancelButton"]';
    }
}
export const drafts = new Drafts();

export function clickDisplayMenu(){
    cy.get(drafts.displayDropdown).click();
}

export function selectDisplayOptions(option){
    cy.get(drafts.displayOptions).contains(option).click();
}

export function selectDraftOptions(option){
    cy.get(drafts.draftOptions).contains(option).click({force : true});
}

export function clickCancelDuplicateWorkFlowModal(){
    cy.get(drafts.duplicateWorkflowModalCancelButton).click();
}