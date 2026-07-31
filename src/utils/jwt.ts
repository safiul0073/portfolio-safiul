const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'your_jwt_secret';

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
