'use strict';

const errorHandler = require('./error-handler');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const router = express.Router();
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use('/', router);
app.use('/api/v1', router);
require('../route/route-channel')(router);
require('../route/clips')(router);

app.all('/{0,}', (req, res) => errorHandler(new Error('Path error. Route not found. From server.js'), res));

let server = module.exports = {};
server.start = () => {
  return new Promise((resolve, reject) => {
    if(server.isOn) return reject('server is already running');

    server.http = app.listen(PORT, () => {
      console.log('server up', PORT);
      mongoose.connect(MONGODB_URI);
      server.isOn = true;
      return resolve(server);
    });
  });
};

server.stop = () => {
  return new Promise((resolve, reject) => {
    if(!server.isOn) return reject('server is not running');

    server.http.close(() => {
      console.log('server down');
      mongoose.disconnect();
      server.isOn = false;
      return resolve();
    });
  });
};