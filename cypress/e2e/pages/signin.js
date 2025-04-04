import Registration from '/signin';

const registration = new Registration();

class Signin {
  constructor() {
    // this.actions = new Actions();
    this.googleButton = '[href="/auth/google"]';
    this.facebookButton = '[href="/auth/facebook"]';
    this.email = 'input[name="email"]';
    this.password = 'input[name="password"]';
    this.signinButton = 'button[id="kt_sign_up_submit"]';
  }
  visit() {
    cy.visit('/login');
  }
  getTitle() {
    cy.title().should('include', 'Sign In');
  }
  //Google button
  checkGoogleButton() {
    cy.checkButton(this.googleButton, '/auth/google', 'Sign in with Google');
  }
  checkGoogleLitleLogo() {
    cy.checkSigninLogo(this.googleButton, 'google-icon.svg');
  }
  checkGoogleRedirect() {
    cy.get(this.googleButton).click();
    cy.timeout(10000);
    cy.origin('https://accounts.google.com', () => {
      cy.url().should('include', 'accounts.google.com');
    });
  }
  //Facebook registration button
  checkFacebookButton() {
    cy.checkButton(
      this.facebookButton,
      '/auth/facebook',
      'Sign in with Facebook'
    );
  }
  checkFacebookLitleLogo() {
    cy.checkSigninLogo(this.facebookButton, 'facebook-2.svg');
  }
  checkFacebookRedirect() {
    cy.get(this.facebookButton).click();
    cy.timeout(3000);
    cy.origin('https://www.facebook.com/', () => {
      cy.url().should('include', 'facebook.com');
    });
  }
  //Email, password properties check
  checkEmailProperty() {
    cy.verifyTheInputField(this.email, 'placeholder', 'Email');
  }
  checkPasswordProperty() {
    cy.verifyTheInputField(this.password, 'placeholder', 'Password');
  }
  emailEntering(email) {
    cy.typeText(this.email, email);
  }
  passwordEntering(password) {
    cy.typeText(this.password, password);
  }
  clickSignIn() {
    cy.get(this.signinButton).click();
  }
}

export default Signin;
