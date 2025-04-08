import Registration from './/registration';

class Signin {
  constructor() {
    this.registration = new Registration();
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
    this.registration.checkGoogleButton();
  }
  checkGoogleLitleLogo() {
    this.registration.checkGoogleLitleLogo();
  }
  checkGoogleRedirect() {
    this.registration.checkGoogleRedirect();
  }
  //Facebook registration button
  checkFacebookButton() {
    this.registration.checkFacebookButton();
  }
  checkFacebookLitleLogo() {
    cy.checkSigninLogo(this.facebookButton, 'facebook-2.svg');
  }
  checkFacebookRedirect() {
    this.registration.checkFacebookRedirect();
    cy.get(this.facebookButton).click();
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
