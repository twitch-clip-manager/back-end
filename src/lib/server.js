'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const router = express.Router();

app.use(cors());
app.use('/', router);
require('../route/route')(router);
app.use('/{0,}', (req, res) => (new Error('Path error. Route not found. From server.js'), res));

let server = module.exports = {};
server.start = () => {
  return new Promise((resolve, reject) => {
    if(server.isOn) return reject('server is already running');

    server.http = app.listen(PORT, () => {
      console.log('server up', PORT);
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
      server.isOn = false;
      return resolve();
    });
  });
};

