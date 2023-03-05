import { createClient } from '../src';

describe('index', () => {
  describe('createClient', () => {
    it('should return a plain object', () => {
      const apiKey = '';
      const client = {};

      const result = createClient(apiKey);

      expect(result).toMatch(client);
    });
  });
});
