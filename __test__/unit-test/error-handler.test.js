'use strict';

const errorHandler = require('../../src/lib/error-handler'); 

describe('Error Handler unit test', function() {  
  this.routeNotFound = new Error('Path error');
  this.res = { status: function(stat){this.statusCode = stat; return this; }, send: function(msg){this.message  = msg; return this;}};

  test('should return a status 404 for path error', () => {
    let err = new Error('path error');
    let errRes = errorHandler(err, this.res);
    expect(errRes.statusCode).toEqual(404);
  });

  test('should return a status 500 in default', () => {
    let err = new Error('default');
    let errRes = errorHandler(err, this.res);
    expect(errRes.statusCode).toEqual(500);
  });
  
});
