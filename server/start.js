const apolloServer = require('./apollo');

// For development: import environment variables from `.env`
require('dotenv').config();

// Configure express and middleware
const app = require('./app');

app.set('port', process.env.PORT);

const server = app.listen(app.get('port'), () => {
  const playgroundUrl =
    process.env.BACKEND_URL + ':' + server.address().port + apolloServer.graphqlPath;
  console.log(`🎡   GraphQL Playground ready at ${playgroundUrl}`);
});
