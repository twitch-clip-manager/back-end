'use strict';

module.exports = function(err, res) {

  let errMsg = `${err.name}: ${err.message}`;
  let msg = errMsg.toLowerCase();

  switch(true) {
  case msg.includes('path error'): return res.status(404).send(errMsg);
  case msg.includes('validation'): return res.status(400).send(errMsg);
  case msg.includes('enoent'): return res.status(404).send(errMsg);
  case msg.includes('objectid failed'): return res.status(404).send(errMsg);
  case msg.includes('duplicate key'): return res.status(409).send(errMsg);
  default: return res.status(500).send(errMsg);
  }

};


  
 