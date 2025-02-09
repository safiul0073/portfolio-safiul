const bcrypt = require('bcryptjs');

let users = [
  {
    id: 1,
    email: "anis@gmail.com",
    password: bcrypt.hashSync('anis522115', 10) // store hashed password
  }
];

export function findUser({ email }: { email: string }) {
  return users.find(user => user.email === email);
}

export function validatePassword(user: any, inputPassword: string) {
  return bcrypt.compareSync(inputPassword, user.password);
}