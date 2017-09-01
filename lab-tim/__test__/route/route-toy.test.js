'use strict';

const server = require('../../server.js');
const superagent = require('superagent');
require('jest');


describe('Testing toy routes', function () {
  afterAll(done => server.close(done));

  describe('all requests to /api/toy', () => {
    describe('POST requests', () => {
      test.only('should return status code 201, create new object and return it', done => {
        superagent.post('localhost:3000/api/toy')
          .set('Content-Type', 'application/json')
          .send({name: 'slinky', desc: 'metal'})
          .then(res => {
            this.toy = JSON.parse(res.text);
            console.log(res.text);
            expect(this.toy.name).toEqual('slinky');
            expect(this.toy.desc).toEqual('metal');
            expect(res.status).toBe(201);
            done();
          });
      });
          // .end((err, res) => {
          //   expect(err).toBeNull();
          //   expect(res.body.name).toEqual('slinky');
          //   expect(res.body.desc).toEqual('metal');
          // });

      test('POST on /api/toy endpoint - should return status code 400', done => {
        superagent.post('localhost:3000/api/toy')
          .send({desc: 'orange'})
          .set('Content-Type', 'application/json')
          .end((err, res) => {
            expect(err).not.toBeNull();
            expect(res.status).toBe(400);
            done();
          });
      });
    });
  });

  describe('PUT method', () => {
    test.only('PUT on /api/toy endpoint - should return status code 204 and response', done => {
      superagent.put('localhost:3000/')
        .send({_id: 'some-id-string', name: 'slinky', desc: 'metal'})
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull();
          expect(res.status).toBe(204);
          expect(res.body._id).not.toBeNull();
          expect(res.body.name).toEqual('slinky');
          expect(res.body.desc).toEqual('metal');
          done();
        });
    });

    test('PUT on /api/toy endpoint - should return status code 400', done => {
      superagent.put('localhost:3000/api/toy')
        .send({name: 'slinky', desc: 'metal'})
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull();
          expect(res.status).toBe(400);
          done();
        });
    });
  });

  describe('GET method', () => {
    test('GET on /api/toy endpoint - should return status code 200 and response', done => {
      superagent.get('localhost:3000/api/toy?_id=some-id-string')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull();
          expect(res.status).toBe(200);
          expect(res.body.name).toEqual('slinky');
          expect(res.body.desc).toEqual('metal');
          done();
        });
    });

    test('GET on /api/toy endpoint - should return status code 404', done => {
      superagent.get('localhost:3000/api/toy?_id=some-other-id-string')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull();
          expect(res.status).toBe(404);
          done();
        });
    });

    test('GET on /api/toy endpoint - should return status code 400', done => {
      superagent.get('localhost:3000/api/toy?name=some-id-string')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull();
          expect(res.status).toBe(400);
          done();
        });
    });
  });

  describe('DELETE method', () => {
    test('DELETE on /api/toy endpoint - should return status code 204', done => {
      superagent.delete('localhost:3000/api/toy?_id=some-id-string')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull();
          expect(res.status).toBe(204);
          done();
        });
    });

    test('DELETE on /api/toy endpoint - should return status code 400', done => {
      superagent.delete('localhost:3000/api/toy?name=some-id-string')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull();
          expect(res.status).toBe(400);
          done();
        });
    });

    test('DELETE on /api/toy endpoint - should return status code 404', done => {
      superagent.delete('localhost:3000/api/toy?_id=some-other-id-string')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull();
          expect(res.status).toBe(404);
          done();
        });
    });
  });
});
