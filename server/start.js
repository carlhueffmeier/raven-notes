// For development: import environment variables from `.env`
require('dotenv').config();
const orm = require('./db/orm');

(async () => {
  await orm.sequelize.sync({ force: true });
  await createMockUser(orm);

  // Configure express and middleware
  const app = require('./app');

  app.set('port', process.env.PORT);

  const graphqlPath = require('./apollo').graphqlPath;
  const server = app.listen(app.get('port'), () => {
    const playgroundUrl = process.env.BACKEND_URL + ':' + server.address().port + graphqlPath;
    console.log(`🎡   GraphQL Playground ready at ${playgroundUrl}`);
  });
})();

async function createMockUser(db) {
  const mockUser = await db.user.create({
    id: 'user-id-bob',
    email: 'bob@raven.io',
    name: 'Bob',
    password: 'supersecret'
  });
  const defaultGroup = await db.group.create({
    id: 'group-id-fantasyland',
    name: 'Fantasyland 🌈'
  });
  await defaultGroup.addMembers([mockUser.id]);
  await mockUser.save();
  await defaultGroup.save();
  return mockUser;
}
