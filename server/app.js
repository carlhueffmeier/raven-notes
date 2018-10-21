const express = require('express');
const { getUserIdFromToken } = require('./lib/utils');
const apolloServer = require('./apollo');
const User = require('./db/modelFactories/user')();

const app = express();

// Extract the user id and store for this request
app.use((req, res, next) => {
  const userId = getUserIdFromToken(req);
  if (userId) {
    req.userId = userId;
  }
  next();
});

// If a user id was found, query the user data
app.use(async (req, res, next) => {
  if (!req.userId) {
    return next();
  }
  const user = await User.findOne({ id: req.userId });
  req.user = user;
  next();
});

apolloServer.applyMiddleware({ app });

module.exports = app;
