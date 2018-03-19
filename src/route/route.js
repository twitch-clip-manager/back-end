'use strict';
const superagent = require('superagent')

module.exports = function(router) {
  router.route('/clips/top')
    .get((req, res) => {
        superagent.get('https://api.twitch.tv/kraken/clips/top?limit=10')
        .set('Client-ID', '490xfzohxg3ilxjcq7uifjssyqwo5e')
        .set('Accept', 'application/vnd.twitchtv.v5+json')
        .then(response => res.send(response.body))
        .catch(err => console.log(err.message))
    })
};