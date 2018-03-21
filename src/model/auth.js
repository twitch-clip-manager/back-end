// import { compare } from '../../../../../../.cache/typescript/2.6/node_modules/@types/bcrypt';

'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Auth = mongoose.Schema({
  username: {type: 'string', required: true, unique: true},
  password: {type: 'string'},
  compHash: {type: 'string', unique: true},
},
{timestamps: true}
);

Auth.methods.createHashedPassword = function(password) {
  if(!password) return Promise.reject(new Error('Password Required'));
  return bcrypt.hash(password, 10)
    .then(hash => this.password = hash)
    .catch(error => error);
};

Auth.methods.comparePasswords = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (error, valid) => {
      if(error) return reject(error);
      if(!valid) return reject(new Error('Invalid password'));
      return resolve(this);
    });
  });
};

Auth.methods.createCompHash = function() {
  this.compHash = crypto.randomBytes(32).toString('hex');
  return this.save()
    .then(() => this.compHash)
    .catch(error => error);
};

Auth.methods.createToken = function() {
  return this.createCompHash()
    .then(compareHash => jwt.sign({jwt:compareHash}, process.env.APP_SECRET))
    .catch(error => error);
};

module.exports = mongoose.model('auth', Auth);