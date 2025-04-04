class Home {
  constructor() {
    this.about = 'a[href="#about"]';
    this.signIn = '.nav-link.anchor[href="/login"]';
  }
  visit() {
    cy.visit('/');
  }
  getTitle() {
    cy.title().should('include', 'Boost Reviews and Sales | Gobigreviews');
  }
  //checking about
  clickAbout() {
    cy.get(this.about).contains('About').click();
  }
  checkAbout() {
    cy.get('#about').should('be.visible');
  }
  clickSignIn() {
    cy.get(this.signIn).should('be.visible').click();
  }
}

export default Home;
