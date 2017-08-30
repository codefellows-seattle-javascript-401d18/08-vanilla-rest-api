'use strict';

const debug = require('debug')('http:route-toy');
const Toy = require('../model/toy');
const storage = require('../lib/storage');

module.exports = function(router) {
  router.post('/api/toy', (req, res)=> {//using the router and each of its methods
    debug('api/toy POST');
    try {
      let newToy = new Toy(req.body.name, req.body.desc);
      storage.create('toy', newToy)//hands the toy object off to memory
        .then(toy => {
          res.writeHead(201, {'Content type': 'application/json'}); //201 means the object  was successfully created
          res.write(JSON.stringify(toy)); //11:58
          res.end();
        });
    } catch(e){
      console.error(e);
      res.writeHead(400, {'Content type': 'text/plain'});
      res.write('bad request: could not create a new toy');
    }
  });
  router.get('/api/toy', (req, res)=> {
    debug('/api/toy GET');
    if(req.url.query._id) {
      storage.fetchOne('toy', req.url.query._id)
        .then(toy => {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(JSON.stringify(toy));//stays toy becuase we're not creating a new item
          res.end();
        })
        .catch(err => {
          console.error(err);
          res.writeHead(400, {'Content type': 'text/plain'});
          res.write('bad request; could not find record');
          res.end();
        });
      return;
    }
    res.writeHead(400, {'Content type': 'text/plain'});
    res.write('bad request; item id required to get record');
    res.end(); //get the server started, in other window-- http POST :3000/api/toy name= barney...should get an id under that...copy and paste it into your query string--//
  });
};
