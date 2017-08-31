'use strict';

const debug = require('debug')('http:router');
const parseUrl = require('./parse-url');
const parseJson = require('./parse-json');

const Router = module.exports = function() {
  this.routes = {
    GET: {
      // '/cowsay': ()=> {}
    },
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
      .catch(err => {
        console.error(err);

        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('bad request; something went wrong in the router');
        res.end();
      });
  };
};
