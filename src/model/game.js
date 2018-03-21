'use strict';

const mongoose = require('mongoose');

const Game = mongoose.Schema({
  name: {type: String, required: true},
});

module.exports = mongoose.model('game', Game);