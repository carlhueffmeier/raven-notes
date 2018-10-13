const utils = require('./utils');

describe('getUserIdFromCookie', () => {
  process.env.APP_SECRET = 'supersecret';
  const bob = { id: 'BOBS_USER_ID' };
  const cookieStorage = {};
  storeCookie = (name, value) => (cookieStorage[name] = value);
  const resMock = { cookie: storeCookie };
  const reqMock = { cookies: cookieStorage };

  it('stores and retrieves a userId correctly', () => {
    utils.storeUserInCookie(bob, resMock);
    const restoredUserId = utils.getUserIdFromCookie(reqMock);
    expect(restoredUserId).toEqual(bob.id);
  });
});
