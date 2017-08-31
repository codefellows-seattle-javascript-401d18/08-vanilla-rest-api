'use strict';
//Take the request and parse it out some more and then return it as a promise//
const debug = require('debug')('http:parse-url');
const urlParse = require('url').parse;
const queryParse = require('querystring').parse;

module.exports = function(req) {
  debug('#parse-url');
  req.url = urlParse(req.url);
  req.url.query = queryParse(req.url.query);
  return Promise.resolve(req);
};
