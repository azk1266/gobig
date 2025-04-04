import Signin from './pages/signin';
import Home from './pages/home';
import { getRandomEmail } from './pages/utils/random_function';

const home = new Home();
const signin = new Signin();

function waitForPageToLoad(timeout = 5000) {
  cy.document().its('readyState').should('eq', 'complete');
  cy.timeout(timeout);
}

describe('check Sign In Page', () => {
  let signinData;
  let randomEmail;
  let randomPassword;
  beforeEach(() => {
    randomEmail = getRandomEmail();
    cy.fixture('signinData').then((data) => {
      signinData = data;
    });
    signin.visit();
    waitForPageToLoad();
  });
  it('redirectFromHomePage', () => {
    home.visit();
    home.clickSignIn();
  });

  it('check Properties', () => {
    signin.getTitle();
    signin.checkEmailProperty();
    signin.checkPasswordProperty();
  });
  it('check Google Button', () => {
    signin.checkGoogleButton();
    signin.checkGoogleLitleLogo();
    signin.checkGoogleRedirect();
  });
  it('check Facebook Button', () => {
    signin.checkFacebookButton();
    signin.checkFacebookLitleLogo();
    signin.checkFacebookRedirect();
  });
  it('positive', () => {
    signin.emailEntering(randomEmail);
    signin.passwordEntering(signinData.valid.password);
  });
  it('negative Without Email', () => {
    signin.passwordEntering(signinData.valid.password);
  });
  it('negative Without Password', () => {
    signin.emailEntering(signinData.valid.email);
  });
  it('negative Without incorrect Email', () => {
    signin.emailEntering(randomEmail);
    signin.passwordEntering(signinData.valid.password);
  });
  it('negative Without incorrect Password', () => {
    signin.emailEntering(signinData.valid.email);
    signin.passwordEntering(signinData.invalid.password);
  });
});
