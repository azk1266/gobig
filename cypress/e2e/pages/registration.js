class Registration {
  constructor() {
    this.googleButton = '[href="/auth/google"]';
    this.facebookButton = '[href="/auth/facebook"]';
    this.name = 'input[name="name"]';
    this.email = 'input[name="email"]';
    this.password = 'input[name="password"]';
    this.repeatPassword = 'input[name="confirm-password"]';
    this.termsCheckbox = 'input[name="toc"]';
    this.termsText = 'I Accept the';
    this.termsLink = 'a[href="/terms_and_conditions"]';
    this.subscribe = '#kt_sign_up_form > div:nth-child(10) > div > input';
    this.signUp = '.btn.btn-primary';
    this.repeatPSWwarning = '.text-danger.errors-field';
    this.wrongRepeatPSWwarningText = 'The password field format is invalid.';
    this.withoutPSWwarningText =
      'The password field confirmation does not match.';
  }

  visit() {
    cy.visit('/register');
  }
  getTitle() {
    cy.title().should('include', 'Sign Up');
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
    cy.timeout(10000);
    cy.origin('https://www.facebook.com/', () => {
      cy.url().should('include', 'facebook.com');
    });
  }
  //Properties check
  checkNameProperty() {
    cy.verifyTheInputField(this.name, 'placeholder', 'Name');
  }
  checkEmailProperty() {
    cy.verifyTheInputField(this.email, 'placeholder', 'Email');
  }
  checkPasswordProperty() {
    cy.verifyTheInputField(this.password, 'placeholder', 'Password');
  }
  checkRepeatPasswordProperty() {
    cy.verifyTheInputField(
      this.repeatPassword,
      'placeholder',
      'Repeat Password'
    );
  }
  nameEntering(name) {
    cy.typeText(this.name, name);
  }
  emailEntering(email) {
    cy.typeText(this.email, email);
  }
  passwordEntering(password) {
    cy.typeText(this.password, password);
  }
  confirmPassword(password) {
    cy.typeText(this.repeatPassword, password);
  }
  //checkboxes
  checkTermsTextIsVisible() {
    cy.get(this.termsCheckbox).parent().should('contain.text', this.termsText);
  }

  checkTermsLinkIsClickable() {
    cy.get(this.termsLink).should('be.visible').click();

    cy.url().should('include', '/terms_and_conditions');
    cy.go('back');
  }

  checkAndClickCheckbox() {
    cy.get(this.termsCheckbox).should('exist').check().should('be.checked');
  }

  //sign up button
  clickSignUp() {
    cy.get(this.signUp).should('not.be.disabled').click();
  }
  buttonIsDisabled() {
    cy.get(this.signUp).should('be.disabled');
  }
  //wrong entering placeholders
  confirmWrongPasswordPlaceholder() {
    cy.get(this.repeatPSWwarning)
      .should('be.visible')
      .should('contain', this.wrongRepeatPSWwarningText);
  }
  confirmWithoutPasswordPlaceholder() {
    cy.get(this.repeatPSWwarning)
      .should('be.visible')
      .should('contain', this.withoutPSWwarningText);
  }
}
export default Registration;
