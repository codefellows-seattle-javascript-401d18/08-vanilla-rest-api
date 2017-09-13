'use strict';
//This thing is putting the toy in the toybox aka memory//

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

  router.get('/api/toy', (req, res) => {
    debug('/api/toy GET');
    try {
        storage.fetchOne(req.body.name); //something like this
        res.end();
      }
    } catch(e) {
      console.error(e);
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request: could not get toy');
      res.end();
    }
  });

  router.get('/api/toy', (req, res) => {
    debug('/api/toy DELETE');
    try {
      if (req.body.name === storage.memory.toy.name || req.body._id === storage.memory.toy.name) {

        //we have to refer to some kind of delete method on the storage object???
        res.end();
      }
    } catch(e) {
      console.error(e);
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request: could not delete toy');
      res.end();
    }
  });


  router.put('/api/toy', (req, res) => {
    debug('/api/toy PUT');
    try {
      if (req.body.name === storage.memory.toy.name || req.body._id === storage.memory.toy.name) {
        // res.writeHead(201, {'Content-Type': 'application/json'});
        // res.write(JSON.stringify(toy));
        res.write('that toy was in there already');
        res.end();
      } else {
        let newToy = new Toy(req.body.name, req.body.desc);
        storage.create('toy', newToy)
          .then(toy => {
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(toy));
            //If I wanted a validation message here, would i have to have another 200 and text/plain precending a res.write?
            res.end();
          });
      }
    } catch(e) {
      console.error(e);
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request: could not create a new toy');
      res.end();
    }
  });
};
