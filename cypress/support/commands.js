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
import {
  checkButton,
  typeText,
  checkSigninLogo,
  verifyTheInputField,
} from '../e2e/pages/global_methods.js';

Cypress.Commands.add('checkButton', checkButton);
Cypress.Commands.add('verifyTheInputField', verifyTheInputField);
Cypress.Commands.add('typeText', typeText);
Cypress.Commands.add('checkSigninLogo', checkSigninLogo);
