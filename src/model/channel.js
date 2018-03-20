'use strict';

const mongoose = require('mongoose');

const Channel = mongoose.Schema({
  name: {type: String, required: true},
});

module.exports = mongoose.model('channel', Channel);