import Registration from './pages/registration';
import Home from './pages/home';
import Signin from './pages/signin';
import { getRandomEmail, getRandomUser } from './pages/utils/random_function';
import Chance from 'chance';

const chance = new Chance();
const home = new Home();
const signin = new Signin();
const registration = new Registration();

describe('check Sign Up Page', () => {
  let signinData;
  let randomEmail;
  let randomPassword;
  let randomName;

  beforeEach(() => {
    // randomEmail = getRandomEmail();
    // randomPassword = getRandomPassword();
    // randomName = getRandomName();
    cy.fixture('signinData').then((data) => {
      signinData = data;
    });
    registration.visit();
    // waitForPageToLoad();
  });

  it('check Properties', () => {
    registration.getTitle();
    registration.checkNameProperty();
    registration.checkEmailProperty();
    registration.checkPasswordProperty();
    registration.checkRepeatPasswordProperty();
  });
  it('check checkBoxes', () => {
    registration.checkTermsTextIsVisible();
    registration.checkTermsLinkIsClickable();
    registration.checkAndClickCheckbox();
  });
  it('sign up positive', () => {
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.passwordEntering(password);
    registration.confirmPassword(password);
    registration.checkAndClickCheckbox();
    // cy.clickSignUp();
  });
  it('sign up negative without name', () => {
    const user = getRandomUser();
    let password = user.password;
    registration.emailEntering(user.email);
    registration.passwordEntering(password);
    registration.confirmPassword(password);
    registration.checkAndClickCheckbox();
    registration.buttonIsDisabled();
  });
  it('sign up negative without email', () => {
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.passwordEntering(password);
    registration.confirmPassword(password);
    registration.checkAndClickCheckbox();
    registration.buttonIsDisabled();
  });
  it('sign up negative without password', () => {
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.confirmPassword(password);
    registration.checkAndClickCheckbox();
    registration.buttonIsDisabled();
  });
  it('sign up negative without password confirmation', () => {
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.passwordEntering(user.password);
    registration.checkAndClickCheckbox();
    // registration.buttonIsDisabled();
    registration.clickSignUp();
    registration.confirmWithoutPasswordPlaceholder();
  });
  it('sign up negative with wrong password repeat', () => {
    const user = getRandomUser();
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.passwordEntering(user.password);
    registration.confirmPassword(user.password);
    registration.checkAndClickCheckbox();
    registration.clickSignUp();
    // registration.buttonIsDisabled();
    registration.confirmWrongPasswordPlaceholder();
  });
  it('sign up negative without Terms check', () => {
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.passwordEntering(password);
    registration.confirmPassword(password);
    registration.buttonIsDisabled();
  });
  //getRandomEmailWithoutDot()
});
