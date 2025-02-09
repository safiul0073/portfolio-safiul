const jwt = require('jsonwebtoken');

const secret = 'your_jwt_secret'; // store this securely in environment variables

export function generateToken(user: any) {
  return jwt.sign({ id: user.id, email: user.email }, secret, {
    expiresIn: '1h'
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    console.log(e)
    return null;
  }
}