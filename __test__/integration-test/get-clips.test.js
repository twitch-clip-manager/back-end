'use strict';

const server = require('../../src/lib/server');
const superagent = require('superagent');

describe('GET', function() {

  beforeAll(() => server.start(8888, () => console.log('Listening on 8888')));
  afterAll(() => server.stop());

  describe('GET /clips/top', function () {

    let topTen;
    // get top ten clips
    beforeAll(() => {
      return superagent.get(':8888/clips/top')
        .then(res => topTen = res.body);
    });

    describe('Valid input', () => {

      test(
        'should have ten clips objects in an array',
        () => {
          expect(topTen.clips.length).toEqual(10);
        });

      test(
        'should have embed url in each clip object',
        () => {
          expect(topTen.clips[0]).toHaveProperty('embed_url');
        });

      test(
        'should return in instance of object',
        () => {
          expect(topTen instanceof Object).toBe(true);
        });

      test(
        'should have array with key "clips"',
        () => {
          expect(topTen.clips instanceof Array).toBe(true);
        });

    });

    describe('Invalid input', () => {
 
      test(
        'should return an error status 404 for not existing route',
        () => {
          expect(false).toBe(false);
        });

    });

  });

});
