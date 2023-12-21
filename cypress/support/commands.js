// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/index.js (or index.ts for TypeScript)

// Cypress configuration
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  // Other global configurations and custom commands can also be placed here.
  // For example, you might have some custom commands or global setup/teardown code.
  // Make sure to add them before or after the Cypress.on() method, depending on your requirements.
  
  /// <reference types="cypress" />
  import 'cypress-file-upload';

  import 'cypress-xpath';
