'use strict';

const server = require('../server.js');
const toy = require('../route/route-toy.js');
const toyJs = require('../model/toy.js');
const parse = require('../lib/parse-json.js');
const parseUrl = require('../lib/parse-url.js');
const storage = require('../lib/storage.js')
const superagent = require('superagent');
require('jest');

// Tried passing in some based on cowsay tests to see if the problem with tests is in the tests themselves
// describe('Server module', function() {
//   afterAll(done => {
//     server.close()
//     done()
//   })
//
//   describe('requests to / route', () => {
//     test('a GET request', done => {
//       superagent.get(':3000/')
//       .end((err, res) => {
//         expect(res.status).not.toBe(200)
//         expect(res.text).not.toBe('Hello from my server')
//         done()
//       })
//     })
//   });
// });


//we gotta close the server after we test//
describe('We have a server instance', function() {
  afterAll(done => {
    server.close();
    done();
  });
  //write a test to ensure that your api returns a status code of 404 for routes that have not been registered//
  describe('Someone puts in a route that has not been registered', ()=> {
    test.only('should give a 404', done => {
      superagent.get(':3000')
        .end((err, res) => {
          expect(res.status).toBe(404);expect(res.text).toBe('route not found');
          server.close();
          done();
        });
    });
  });
  //GET: test 404, it should respond with 'not found' for valid requests made with an id that was not found
  describe('for api/toy/ endpoint', ()=> {
    describe('testing GET', done => {
      test('should give a 404', () => {
        superagent.get(':3000')
          .end((err, res) => {
            expect(res.status).toBe(404);
            // expect(res.text).toBe('not found');
            server.close();
            done();
          });
      });
    });
  });
});

//write tests to ensure the /api/simple-resource-name endpoint responds as described for each condition below:

//GET: test 400, it should respond with 'bad request' if no id was provided in the request
//note: this will need to change if you complete the bonus point
//GET: test 200, it should contain a response body for a request made with a valid id
//POST: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
//POST: test 201, it should respond with the body content for a post request with a valid body
//PUT: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
//PUT: test 204, it should respond with no body content for a put request with a valid body
//DELETE: test 400, it should respond with 'bad request' if no resource id was provided
//DELETE: test 404, it should respond with 'not found' for valid requests made with an id that was not found
//DELETE: test 204, it should respond with no body content for a request request with a valid resource id
