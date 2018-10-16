// For development: import environment variables from `.env`
require('dotenv').config();

(async () => {
  await require('./db/orm').sequelize.sync();

  // Configure express and middleware
  const app = require('./app');

  app.set('port', process.env.PORT);

  const graphqlPath = require('./apollo').graphqlPath;
  const server = app.listen(app.get('port'), () => {
    const playgroundUrl = process.env.BACKEND_URL + ':' + server.address().port + graphqlPath;
    console.log(`🎡   GraphQL Playground ready at ${playgroundUrl}`);
  });
})();
