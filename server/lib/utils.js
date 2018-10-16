const { randomBytes } = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

// ~~ System utils ~~
const asyncRandomBytes = promisify(randomBytes);

// ~~ Cookies ~~
const generateToken = user => {
  return jwt.sign({ userId: user.id }, process.env.APP_SECRET);
};

const extractToken = req => {
  const token = req.headers.authorization;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // Put the userId onto the req for future requests to access
    return userId;
  }
};

exports.asyncRandomBytes = asyncRandomBytes;
exports.generateToken = generateToken;
exports.extractToken = extractToken;
