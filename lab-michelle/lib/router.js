'use strict';

const debug = require('debug')('http:router');
const parseUrl = require('./parse-url');
const parseJson = require('./parse-json');
const server = require('../server.js');


const Router = module.exports = function() {
  this.routes = {
    GET: {},
    // '/api/toy': (res, req)=> {
    //   res.writeHead(200, {'Content-Type': 'text/plain'});
    //   // let toy = req.url.query; res.write(toy);
    //   // //Logic for the send: if we're getting something we gotta get something back??
    //   // res.send(toy);
    //   res.end();
    //   return;
    // },

    // '/cowsay': ()=> {}
    POST: {},
    PUT: {},
    DELETE: {},
  };
};

//1pt: a GET request to /api/simple-resource-name with no ?id= should return an array of all of the ids for that resource, and associated tests


Router.prototype.get = function(endpoint, callback) {
  this.routes.GET[endpoint] = callback;
};

Router.prototype.post = function(endpoint, callback) {
  this.routes.POST[endpoint] = callback;
};

Router.prototype.put = function(endpoint, callback) {
  this.routes.PUT[endpoint] = callback;
};

Router.prototype.delete = function(endpoint, callback) {
  this.routes.DELETE[endpoint] = callback;
};

Router.prototype.route = function() {
  return (req, res) => {
    Promise.all([
      parseUrl(req),
      parseJson(req),
    ])
      .then(()=> {
        if(typeof this.routes[req.method][req.url.pathname] === 'function') {
          this.routes[req.method][req.url.pathname](req, res);
          return;
        }
        //otherwise...our silent else//
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('route not found');
        res.end();
      })
      //I keep catching here, so there is something wrong with the request OR the method is not set up right?
      .catch(err => {
        console.error(err);

        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('bad request; something went wrong in the router');
        res.end();
        //reboot seemed to solve problem but oddly if I start nodemon it thinks I'm already running something on :3000 and tests won't run. If I DON'T use nodemon, tests will run. WHY IS THIS SERVER LITERALLY A BLACK BOX OF MYSTERY AUGHHHHH 
        // server.close(); //will try this again after a literal reboot of computer
        // return; NOPE doesn't work
        // server.close(); this doesn't work either
        // server.end(); - I was trying to get it to stop the server running bc it seems like that is an issue????

      });
  };
};
