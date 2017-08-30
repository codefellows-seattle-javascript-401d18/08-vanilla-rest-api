'use strict';

const debug = require('debug')('http:route-cars');
const Cars = require('../model/cars');
const storage = require('../lib/storage');
const router = require('../lib/router');

module.exports = function(router) {
  router.post('/api/cars', (req, res) => {
    debug('/api/cars POST');
    try {
      let newcars = new Cars(req.body.name, req.body.desc, req.body.year);
      // if successful, store this thing in memory using the storage module
      storage.create('cars', newcars)
        .then(cars => {
          res.writeHead(201, {'Content-Type': 'application/json'});
          res.write(JSON.stringify(cars));
          res.end();
        });
    } catch(e) {
      console.error(e);
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request: could not create a new cars');
      res.end();
    }
  });

  router.get('/api/cars', (req, res) => {
    debug('/api/cars GET');
    if(req.url.query._id) {
      storage.fetchOne('cars', req.url.query._id)
        .then(cars => {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(JSON.stringify(cars));
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

  ///delete method
  router.delete('/api/cars', (req, res) => {
    debug('/api/cars DELETE');
    if(req.url.query._id) {
      storage.deleteItem('cars', req.url.query._if)
        .then(cars => {
          res.writeHead(200, {'Content-Type': 'text/plain'});
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
    res.writeHead(400, {'Content-Type': 'text.plain'});
    res.write('bad request; item id required to get record');
    res.end();
  });


  ///put method
  router.put('/api/cars', (req, res) => {
    debug('api/cars PUT');
    if(req.url.query._id) {
      storage.updateItem('cars', req.url.query._id)
        .then(cars => {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end();
        })
        .catch(err => {
          console.error(err);
          res.writeHead(400, {'Content-Type': 'text/plain'});
          res.write('bad request could not find record');
          res.end();
        });
      return;
    }
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write('bad request; item update require ID');
    res.end();
  });
};
