const { randomBytes } = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

/**
 * Generates cryptographically strong pseudo-random data
 * @param {number} size The size argument is a number indicating the number of bytes to generate.
 * @returns {Promise<Buffer>} Buffer of random bytes
 */
const asyncRandomBytes = promisify(randomBytes);

/**
 * Generates a token containing the user id
 * @param {Object} user The user object
 * @param {string} user.id The user id
 */
const generateTokenForUser = user => {
  return jwt.sign({ userId: user.id }, process.env.APP_SECRET);
};

/**
 * Retrieves the user id from the authorization headers
 * @param {Object} req The request object
 */
const getUserIdFromToken = req => {
  const token = req.headers.authorization;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }
};

exports.asyncRandomBytes = asyncRandomBytes;
exports.generateTokenForUser = generateTokenForUser;
exports.getUserIdFromToken = getUserIdFromToken;
