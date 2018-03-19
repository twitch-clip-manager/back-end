'use strict';

module.exports = function(err, res) {

  let errMsg = `${err.name}: ${err.message}`;
  let msg = errMsg.toLowerCase();

  console.log('error msg', msg);

  switch(true) {
  case  msg.includes('path error'): return res.status(404).send(errMsg);
  default: return res.status(500).send(errMsg);
  }

};
