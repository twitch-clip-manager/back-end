'use strict';

const Game = require('../model/game');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');

module.exports = function(router) {
  router.route('/game/:_id?')
    .get((req, res) => {
      if(req.params._id) {
        return Game.findById(req.params._id)
          .then(game => res.status(200).json(game))
          .catch(err => errorHandler(err, res));
      }
      Game.find()
        // .then(games => games.map(a => a._id))
        .then(ids => res.status(200).json(ids))
        .catch(err => errorHandler(err, res));
    })

    .post(bodyParser, (req, res) => {
      new Game(req.body).save()
        .then(game => res.status(201).json(game))
        .catch(err => errorHandler(err, res));
    })

    .delete((req, res) => {
      Game.findByIdAndRemove(req.params._id)
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    });
};