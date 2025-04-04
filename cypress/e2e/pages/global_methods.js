export const checkButton = (selector, value, text) => {
  cy.get(selector)
    .should('be.visible')
    .should('have.attr', 'href', value)
    .contains(text);
};

export const checkSigninLogo = (selector, src) => {
  cy.get(selector).within(() => {
    cy.get('img')
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', src);
  });
};

export const verifyTheInputField = (selector, attr, text) => {
  cy.get(selector).should('have.attr', attr, text).should('be.visible');
};

export const typeText = (selector, text) => {
  cy.get(selector).type(text).should('have.value', text);
};
