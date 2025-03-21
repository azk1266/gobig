class Signin {
  visit() {
    cy.visit('/login');
  }
  getTitle() {
    cy.title().should('include', 'Sign In');
  }
  checkGoogleButton() {
    cy.get('[href="/auth/google"]')
      .should('have.attr', 'href', '/auth/google')
      .and('be.visible')
      .contains('Sign in with Google');
  }
  checkGoogleLitleLogo() {
    cy.get('a[href="/auth/facebook"]').within(() => {
      cy.get('img')
        .should('be.visible')
        .and('have.attr', 'src')
        .and('include', 'facebook-2.svg');
    });
  }
  checkFacebookButton() {
    cy.get('[href="/auth/facebook"]')
      .should('have.attr', 'href', '/auth/facebook')
      .and('be.visible')
      .contains('Sign in with Facebook');
  }
  checkFacebookLitleLogo() {
    cy.get('a[href="/auth/facebook"]').within(() => {
      cy.get('img')
        .should('be.visible')
        .and('have.attr', 'src')
        .and('include', 'facebook-2.svg');
    });
  }
}
