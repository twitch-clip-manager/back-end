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

    });

    describe('Invalid input', () => {
 
      test(
        'dummuy',
        () => {
          expect(true).toBe(true);
        });

    });

  });

});
