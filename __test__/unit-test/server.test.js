'use strict';

const server = require('../../src/lib/server');


describe('Server', function(){

  beforeAll(() => server.start());
  afterAll(() => server.stop());

  describe('Server errors', () => {

    it('Should throw error on re-server', () => {
      return server.start()
        .catch((err) => {
          expect(err).toBe('server is already running');
      });
    });

    it('Should throw error on stopping stopped server', () => {
      server.stop();
      return server.stop()
        .catch((err) => {
          expect(err).toBe('server is not running');
      });
    });

  });
});
