const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { getUserIdFromCookie } = require('./lib/utils');
const apolloServer = require('./apollo');
const User = require('./db/modelFactories/user')();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);

app.use(cookieParser());

// Extract the user id and store for this request
app.use((req, res, next) => {
  const userId = getUserIdFromCookie(req);
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
  const user = await User.findOne({ _id: req.userId });
  req.user = user;
  next();
});

// We have to turn off 'cors' to prevent apollo from overwriting origin headers
// https://github.com/apollographql/apollo-server/blob/79191397faa3f544e9241faa8e9110014bf00e43/packages/apollo-server-express/src/ApolloServer.ts#L127
apolloServer.applyMiddleware({ app, cors: false });

module.exports = app;
