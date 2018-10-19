const utils = require('./utils');

describe('utils', () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
  });

  describe('token generation', () => {
    const userBob = { id: 'bobs_user_id' };
    process.env.APP_SECRET = 'supersecret';
    it('extracted token matches input', () => {
      const token = utils.generateTokenForUser(userBob);
      const mockReq = { headers: { authorization: token } };
      const extractedUserId = utils.getUserIdFromToken(mockReq);
      expect(extractedUserId).toBe(userBob.id);
    });
  });
});
