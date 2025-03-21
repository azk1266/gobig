class Home {
  visit() {
    cy.visit('/');
  }
  getTitle() {
    cy.title().should('include', 'Boost Reviews and Sales | Gobigreviews');
  }
}
