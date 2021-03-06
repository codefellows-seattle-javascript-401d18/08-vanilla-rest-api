'use strict';

const debug = require('debug')('http:route-toy');
const Toy = require('../model/toy');
const storage = require('../lib/storage');

module.exports = function(router) {
  router.post('/api/toy', (req, res) => {
    debug('/api/toy POST');
    try {
      let newToy = new Toy(req.body.name, req.body.desc);
      console.log(newToy);
      storage.create('toy', newToy)
        .then(toy => {
          res.writeHead(201, {'Content-Type': 'application/json'});
          res.write(JSON.stringify(toy));
          res.end();
        });
    } catch(err) {
      console.error(err);
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request: could not create a new toy');
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
          res.write('bad request; could not find record');
          res.end();
        });
      return;
    }

    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write('bad request; item id required to get record');
    res.end();
  });

  // This is where the put method goes...
  router.put('/api/toy', (req, res) => {
    debug('/api/toy PUT');
    if(!req.url.query._id) {
      try {
        let newToy = new Toy(req.body.name, req.body.desc);
        console.log(newToy);
        storage.create('toy', newToy)
          .then(toy => {
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(toy));
            res.end();
          });
      } catch(err) {
        console.error(err);
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('bad request: could not create a new toy');
        res.end();
      }
    }
    Toy.findByIdAndUpdate(req.url.query._id, req.body, {new: true}, (err) => {
      if(err) console.error(err);
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.write('Toy not updated.');
      res.end();
    });
  });


  // This is where the delete method goes...
  router.delete('/api/toy', (req, res) => {
    debug('/api/toy DELETE');
    try {
      Toy.findByIdAndRemove(req.url.query._id, () => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.write('successful request: toy deleted');
        res.end();
      });
    } catch(err) {
      console.error(err);
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request: Unable to delete toy');
      res.end();
    }
  });

};
