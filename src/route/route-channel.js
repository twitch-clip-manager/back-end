'use strict';

const Channel = require('../model/channel');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');

module.exports = function(router) {

  router.route('/user/:_id?')
    .get((req, res) => {
      if(req.params._id) {
        return Channel.findById(req.params._id)
          .then(channel => res.status(200).json(channel))
          .catch(err => errorHandler(err, res));
      }

      Channel.find()
        .then(ids => res.status(200).json(ids))
        .catch(err => errorHandler(err, res));
    })

    .post(bodyParser, (req, res) => {
      new Channel(req.body).save()
        .then(channel => res.status(201).json(channel))
        .catch(err => errorHandler(err, res)); 
    })

    .put(bodyParser, (req, res) => {
      Channel.findByIdAndUpdate(req.params._id, req.body, {upsert: true, runValidators: true})
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    })

    .delete((req, res) => {
      Channel.findByIdAndRemove(req.params._id)
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    });
};