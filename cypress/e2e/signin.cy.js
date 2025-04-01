import Signin from './pages/signin';
import Home from './pages/home';

const home = new Home();
const signin = new Signin();

describe('check Sign In Page', () => {
  let signinData;
  beforeEach(() => {
    cy.fixture('signinData').then((data) => {
      signinData = data;
    });
    signin.visit();
  });
  //   it('redirectFromHomePage', () => {
  //     home.visit();
  //     home.clickSignIn();
  //   });
  it('checkProperties', () => {
    signin.getTitle();
    signin.checkEmailProperty();
    signin.checkPasswordProperty();
  });
  it('checkGoogleButton', () => {
    signin.checkGoogleButton();
    signin.checkGoogleLitleLogo();
    signin.checkGoogleRedirect();
  });
  it('checkFacebookButton', () => {
    signin.checkFacebookButton();
    signin.checkFacebookLitleLogo();
    signin.checkFacebookRedirect();
  });
});
