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

export { getRandomEmail, getRandomPassword, getRandomName };
