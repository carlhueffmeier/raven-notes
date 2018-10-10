// For development: import environment variables from `.env`
require('dotenv').config();

(async () => {
  await require('./db/orm').sequelize.sync({ force: true });

  // Configure express and middleware
  const app = require('./app');

  app.set('port', process.env.PORT);

  const apolloServer = require('./apollo');
  const server = app.listen(app.get('port'), () => {
    const playgroundUrl =
      process.env.BACKEND_URL + ':' + server.address().port + apolloServer.graphqlPath;
    console.log(`🎡   GraphQL Playground ready at ${playgroundUrl}`);
  });
})();
