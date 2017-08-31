'use strict';

const debug = require('debug')('http:route-toy');
const Toy = require('../model/toy');
const storage = require('../lib/storage');

module.exports = function(router) {
  router.post('/api/toy', (req, res) => {
    debug('/api/toy POST');
    try {
      let newToy = new Toy(req.body.name, req.body.desc);
      storage.create('toy', newToy)
      .then(toy => {
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(toy));
        res.end();
      });
    } catch(e) {
      console.error(e);
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request: could not create a new toy');
      res.end();
    }
  });
};
