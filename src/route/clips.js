'use strict';

const errorHandler = require('../../src/lib/error-handler');
const superagent = require('superagent');
const clientId = process.env.TWITCH_CLIENT_ID;

module.exports = function(router) {
  router.route('/clips/top')
    .get((req, res) => {
      superagent.get('https://api.twitch.tv/kraken/clips/top?limit=10')
        .set('Client-ID', clientId)
        .set('Accept', 'application/vnd.twitchtv.v5+json')
        .then(response => res.send(response.body))
        .catch(err => errorHandler(err, res));
    });
};
