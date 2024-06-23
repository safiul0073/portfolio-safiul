const bcrypt = require('bcryptjs');

let users = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: bcrypt.hashSync('12345678', 10) // store hashed password
  }
];

export function findUser({ email }: { email: string }) {
  return users.find(user => user.email === email);
}

export function validatePassword(user: any, inputPassword: string) {
  return bcrypt.compareSync(inputPassword, user.password);
}