'use strict';

const debug = require('debug')('http:route-toy');
const Toy = require('../model/toy');
const storage = require('../lib/storage');

module.exports = function(router) {
  router.post('/api/toy', (req, res) => {
    debug('./api/toy POST');
    try {
      let newToy = new Toy(req.body.name, req.body.desc);
      storage.create('toy', newToy)
      .then(toy => {
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(toy));
        res.end();
      });
    } catch(e) {
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request: could not create new toy');
      res.end();
    }
  });
  router.get('/api/toy', (req, res) => {
    debug('/api/toy GET');
    if(req.url.query._id) {
      storage.fetchOne('toy', req.url.query._id)
      .then(toy => {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(toy));
        res.end();
      })
      .catch(err => {
        console.error(err);
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('bad request; item id required to get record');
        res.end();
      });
      return;
    }
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write('bad request; item id required to get record');
    res.end();
  });
};




// TODOs:
// 1. Create a RESTful API using only vanilla JS and Node
// 2. Modularize our code, and use best practices for separating concerns
// 3. Have a single 'in-memory' resource/model for persistence (only while server is running)
// 4. Recreate the basic functionality of ExpressJS as a Router

// Demo today will complete GET and POST functionality. Students will complete PUT, DELETE, DOCS, and TESTS
