'use strict';
//server is kicking off the chain reaction//
const debug = require('debug')('http:server');
const http = require('http');
const Router = require('./lib/router');
const router = new Router();
const PORT = process.env.PORT || 3000;
//tried 4000 and it still hates me

require('./route/route-toy')(router);

const server = module.exports = http.createServer(router.route());

server.listen(PORT, ()=> console.log(`Listening on ${PORT}`));

// TODOs:
// 1. Create a RESTful API using only vanilla JS and Node
// 2. Modularize our code, and use best practices for separating concerns
// 3. Have a single 'in-memory' resource/model for persistence (only while server is running)
// 4. Recreate the basic functionality of ExpressJS as a Router
