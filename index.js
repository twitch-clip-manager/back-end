'use strict';

const server = require('./src/lib/server');
server.start(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));