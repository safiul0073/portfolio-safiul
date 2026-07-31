const bcrypt = require('bcryptjs');

const adminEmail = process.env.ADMIN_EMAIL || "anis@gmail.com";
const adminPassword = process.env.ADMIN_PASSWORD || "anis522115";

const users = [
  {
    id: 1,
    email: adminEmail,
    password: bcrypt.hashSync(adminPassword, 10)
  }
];

export function findUser({ email }: { email: string }) {
  return users.find(user => user.email === email);
}

export function validatePassword(user: any, inputPassword: string) {
  return bcrypt.compareSync(inputPassword, user.password);
}
