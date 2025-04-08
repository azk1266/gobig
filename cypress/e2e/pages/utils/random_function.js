import { faker } from '@faker-js/faker';
import Chance from 'chance';

const chance = new Chance();

function getRandomEmail() {
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'mail.com'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${randomString}@${randomDomain}`;
}

function getRandomPassword() {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 7; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
function getRandomName() {
  const names = ['Mark', 'Victor', 'Emily', 'Sasha', 'Vadim', 'Liza'];
  const randomName = Math.floor(Math.random() * names.length);
  return randomName;
}
//for wrong cases
function getRandomEmailWithoutDot() {
  const domains = ['gmailcom', 'yahoocom', 'outlookcom', 'mailcom'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${randomString}@${randomDomain}`;
}

// export function getRandomUser() {
//   return {
//     name: faker.person.firstName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(12),
//     phone: faker.phone.number(),
//     address: faker.location.streetAddress(),
//   };
// }

export function getRandomUser() {
  return {
    name: chance.first(),
    email: chance.email(),
    password: chance.string({
      length: 12,
      pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    }),
    phone: chance.phone(),
    address: chance.address(),
  };
}

export {
  getRandomEmail,
  getRandomPassword,
  getRandomName,
  getRandomEmailWithoutDot,
};
