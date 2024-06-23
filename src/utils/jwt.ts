const jwt = require('jsonwebtoken');

const secret = 'your_jwt_secret'; // store this securely in environment variables

export function generateToken(user: any) {
  return jwt.sign({ id: user.id, email: user.email }, secret, {
    expiresIn: '1h'
  });
}

export function verifyToken(token: any) {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
}