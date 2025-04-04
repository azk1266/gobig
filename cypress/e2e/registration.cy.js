import Registration from './pages/signin';
import Home from './pages/home';
import Signin from './pages/signin';
import { getRandomEmail } from './pages/utils/random_function';

const home = new Home();
const signin = new Signin();
const registration = new Registration();

describe('check Sign Up Page', () => {
  let signinData;
  let randomEmail;
  let randomPassword;
  let randomName;

  beforeEach(() => {
    randomEmail = getRandomEmail();
    randomPassword = getRandomPassword();
    cy.fixture('signinData').then((data) => {
      signinData = data;
    });
    registration.visit();
    // waitForPageToLoad();
  });
});
