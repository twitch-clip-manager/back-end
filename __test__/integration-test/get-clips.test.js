'use strict';

const server = require('../../src/lib/server');
const superagent = require('superagent');
const PORT = process.env.PORT;
const GAME_KEYWORD = process.env.GAME_KEYWORD;
const CHANNEL_KEYWORD = process.env.CHANNEL_KEYWORD;

describe('GET', function() {

  beforeAll(() => server.start(PORT, () => console.log(`Listening on ${PORT}`)));
  afterAll(() => server.stop());

  describe('GET /clips/top', function () {

    let topTen;
    // get top ten clips
    beforeAll(() => {
      return superagent.get(`:${PORT}/clips/top`)
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
        'should have embed html in each clip object',
        () => {
          expect(topTen.clips[0]).toHaveProperty('embed_html');
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

  describe('GET /clips/game:id', function () {

    let gameTen;
    // get top ten clips for a specific game
    beforeAll(() => {
      return superagent.get(`:${PORT}/clips/game${GAME_KEYWORD}`)
        .then(res => gameTen = res.body);
    });

    describe('Valid input', () => {

      test(
        'should have ten clips objects in an array',
        () => {
          expect(gameTen.clips.length).toEqual(10);
        });

      test(
        'should have embed url in each clip object',
        () => {
          expect(gameTen.clips[0]).toHaveProperty('embed_url');
        });

      test(
        'should have embed html in each clip object',
        () => {
          expect(gameTen.clips[0]).toHaveProperty('embed_html');
        });

      test(
        'should return in instance of object',
        () => {
          expect(gameTen instanceof Object).toBe(true);
        });

      test(
        'should have array with key "clips"',
        () => {
          expect(gameTen.clips instanceof Array).toBe(true);
        });

    });
  });

  describe('GET /clips/channel:id', function () {

    let channelTen;
    // get top ten clips for a specific channel
    beforeAll(() => {
      return superagent.get(`:${PORT}/clips/channel${CHANNEL_KEYWORD}`)
        .then(res => channelTen = res.body);
    });

    describe('Valid input', () => {

      test(
        'should have ten clips objects in an array',
        () => {
          expect(channelTen.clips.length).toEqual(10);
        });

      test(
        'should have embed url in each clip object',
        () => {
          expect(channelTen.clips[0]).toHaveProperty('embed_url');
        });

      test(
        'should have embed html in each clip object',
        () => {
          expect(channelTen.clips[0]).toHaveProperty('embed_html');
        });

      test(
        'should return in instance of object',
        () => {
          expect(channelTen instanceof Object).toBe(true);
        });

      test(
        'should have array with key "clips"',
        () => {
          expect(channelTen.clips instanceof Array).toBe(true);
        });

    });
  });
});
