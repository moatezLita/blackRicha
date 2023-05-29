const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const secretKey = process.env.SECRET_KEY;
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const options = {
    expiresIn: '1d', // Token expiration time
  };

  return jwt.sign(payload, secretKey, options);
};

const generateResetToken = () => {
  const token = crypto.randomBytes(20).toString('hex');
  return token;
};

module.exports = { generateToken, generateResetToken };

