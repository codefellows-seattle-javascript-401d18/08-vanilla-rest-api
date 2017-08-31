'use strict';
//Sticking tests in here instead of server test BECAUSE WHY THE HELL NOT AT THIS POINT
//
// const routetoy = require('../route/route-toy.js');
const superagent = require('superagent');
const server = require('../../server.js');
//1pt: write as many unit tests as you can to cover all of the modularized code in our lib, model, and route dirs

// we gotta close the server after we test//
describe('We have a server instance', function() {
  afterAll(done => {
    //I've tried after and beforeAll and both give me EADDRINUSE issues
    server.close();
    done();
  });
  // write a test to ensure that your api returns a status code of 404 for routes that have not been registered//
  describe('Someone puts in a route that has not been registered', ()=> {
    test('should give a 404', done => {
      superagent.get(':3000/api/toy') //trying this doesn't seem to help either
        .end((err, res) => {
          expect(res.status).toBe(404);expect(res.text).toBe('route not found');
          done();
        });
    });
  });
  //GET: test 404, it should respond with 'not found' for valid requests made with an id that was not found
  describe('for api/toy/ endpoint', ()=> {
    describe('testing POST', done => {
      test('should give a 404', () => {
        superagent.post(':3000/api/toy')
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
