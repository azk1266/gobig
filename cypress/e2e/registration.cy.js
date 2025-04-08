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
  // let randomEmailWithoutDot;

  beforeEach(() => {
    // randomEmail = getRandomEmail();
    // randomPassword = getRandomPassword();
    // randomName = getRandomName();
    // randomEmailWithoutDot = getRandomEmailWithoutDot();
    cy.fixture('signinData').then((data) => {
      signinData = data;
    });
    cy.allure().startStep('visit registration page');
    registration.visit();
    cy.allure().endStep();
    // waitForPageToLoad();
  });

  it('check Properties', () => {
    cy.allure().startStep('check properties');
    registration.getTitle();
    registration.checkNameProperty();
    registration.checkEmailProperty();
    registration.checkPasswordProperty();
    registration.checkRepeatPasswordProperty();
    cy.allure().endStep();
  });
  it('check checkBoxes', () => {
    cy.allure().startStep('check Term checkbox');
    registration.checkTermsTextIsVisible();
    registration.checkTermsLinkIsClickable();
    registration.checkAndClickCheckbox();
    cy.allure().endStep();
  });
  it('sign up positive', () => {
    cy.allure().startStep('valid sign up');
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.passwordEntering(password);
    registration.confirmPassword(password);
    registration.checkAndClickCheckbox();
    // cy.clickSignUp();
    cy.allure().endStep();
  });
  it('sign up negative without name', () => {
    cy.allure().startStep('invalid sign up without name');
    const user = getRandomUser();
    let password = user.password;
    registration.emailEntering(user.email);
    registration.passwordEntering(password);
    registration.confirmPassword(password);
    registration.checkAndClickCheckbox();
    registration.buttonIsDisabled();
    cy.allure().endStep();
  });
  it('sign up negative without email', () => {
    cy.allure().startStep('invalid sign up without email');
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.passwordEntering(password);
    registration.confirmPassword(password);
    registration.checkAndClickCheckbox();
    registration.buttonIsDisabled();
    cy.allure().endStep();
  });
  it('sign up negative without password', () => {
    cy.allure().startStep('invalid sign up without password');
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.confirmPassword(password);
    registration.checkAndClickCheckbox();
    registration.buttonIsDisabled();
    cy.allure().endStep();
  });
  it('sign up negative without password confirmation', () => {
    cy.allure().startStep('invalid sign up without password confirmation');
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.passwordEntering(user.password);
    registration.checkAndClickCheckbox();
    // registration.buttonIsDisabled();
    registration.clickSignUp();
    registration.confirmWithoutPasswordPlaceholder();
    cy.allure().endStep();
  });
  it('sign up negative with wrong password repeat', () => {
    cy.allure().startStep('invalid sign up not matching passwords');
    const user = getRandomUser();
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.passwordEntering(user.password);
    registration.confirmPassword(user.password);
    registration.checkAndClickCheckbox();
    registration.clickSignUp();
    // registration.buttonIsDisabled();
    registration.confirmWrongPasswordPlaceholder();
    cy.allure().endStep();
  });
  it('sign up negative without Terms check', () => {
    cy.allure().startStep('invalid sign up without Terms check');
    const user = getRandomUser();
    let password = user.password;
    registration.nameEntering(user.name);
    registration.emailEntering(user.email);
    registration.passwordEntering(password);
    registration.confirmPassword(password);
    registration.buttonIsDisabled();
    cy.allure().endStep();
  });
  // it('sign up negative Email without dot', () => {
  //   const user = getRandomUser();
  //   let password = user.password;
  //   registration.nameEntering(user.name);
  //   registration.emailEntering(user.email);
  //   registration.passwordEntering(password);
  //   registration.confirmPassword(password);
  //   registration.buttonIsDisabled();
  // });
  //getRandomEmailWithoutDot()
});
