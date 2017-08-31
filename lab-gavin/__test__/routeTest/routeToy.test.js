const server = require('/Users/Gavin/codefellows/401/labs/08-vanilla-rest-api/lab-gavin/server.js');
const superagent = require('superagent');


let aNewID;
describe('#ROUTE-TOY-TEST', () => {
  // beforeAll((done) => {
  //   server.listen(3000, () => done());
  // });
  afterAll((done) => {
    server.close(() => done());
  });
  describe('#POST', () => {
    describe('POST method, endpoint', () => {
      test('should return 400 when user inputs invalid url call', done => {
        superagent.post('localhost:3000/toy/api')
          .set('Content-Type', 'text/plain')
          .end((err, res) => {
            expect(err).not.toBeNull();
            expect(res.status).toBe(400);
            done();
          });
      });

      test('Should return name and desc of toy user posted', done => {
        superagent.post('localhost:3000/api/toy')
          .send({'name': 'PowerRanger', 'desc': 'Totally Awesome Red Ranger'})
          .type('application/json')
          .end((err, res) => {
            aNewID = res.body._id;
            expect(res.body.name).toEqual('PowerRanger');
            expect(res.body.desc).toEqual('Totally Awesome Red Ranger');
            expect(res.status).toEqual(201);
            done();
          });
      });
    });
  });


  describe('#GET', () => {
    describe('GET method endpoint', () => {
      test('should return 404 when user requests with an invalid or not found ID', done => {
        superagent.get('localhost:3000/api/toy')
          .send({'_id': '3875983795'})
          .type('application/json')
          .end((err, res) => {
            expect(err).not.toBeNull();
            expect(res.status).toBe(400);
            done();
          });
      });

      test('Should return 400 if no ID was provided', done => {
        superagent.get('localhost:3000/api/toy')
          .send({})
          .type('application/json')
          .end((err, res) => {
            expect(res.body.name).toEqual(undefined);
            expect(res.status).toEqual(400);
            done();
          });
      });

      test('Should return user with toy information from an ID', done => {
        superagent.post('localhost:3000/api/toy')
          .send({'name': 'PowerRanger', 'desc': 'Totally Awesome Red Ranger'})
          .type('application/json');
        aNewID = res.body._id;
        superagent.get('localhost:3000/api/toy')
          .send({'_id': `${aNewID}`})
          .type('application/json')
          .end((err, res) => {
            expect(res.body).toEqual('PowerRanger');
            expect(res.body).toEqual('Totally Awesome Red Ranger');
            expect(res.status).toEqual(200);
            done();
          });
      });
    });
  });

  describe('#DELETE', () => {
    describe('DELETE method endpoint', () => {
      test('should return 400 if no resource ID was provided', done => {
        superagent.delete('localhost:3000/cowsay')
          .set('Content-Type', 'text/plain')
          .end((err, res) => {
            expect(err).not.toBeNull();
            expect(res.status).toBe(400);
            done();
          });
      });

      test('Should return 404 for valid requests made with an ID that was not found', done => {
        superagent.delete('localhost:3000/api/toy')
          .send({'_id': '23235232235'})
          .type('application/json')
          .end((err, res) => {
            expect(err).not.toBeNull();
            expect(res.status).toBe(404);
            done();
          });
      });


      test('Should respond with 204 no body content for a request with a valid resource ID.', done => {
        superagent.post('localhost:3000/api/toy')
          .send({'name': 'PowerRanger', 'desc': 'Totally Awesome Red Ranger'})
          .type('application/json');
        aNewID = res.body._id;
        superagent.delete('localhost:3000/api/toy')
          .send({'_id': `${aNewID}`})
          .type('application/json')
          .end((err, res) => {
            // expect(res.text).toEqual({ text: JSON.stringify('Hi, Im Cow') });
            expect(res.status).toEqual(204);
            done();
          });
      });
    });
  });

  describe('#PUT', () => {
    describe('POST method, /cowsay endpoint', () => {
      test('should return 400 if no request body or bad request body', done => {
        superagent.put('localhost:3000/cowsay')
          .set('Content-Type', 'text/plain')
          .end((err, res) => {
            expect(err).not.toBeNull();
            expect(res.status).toBe(400);
            done();
          });
      });

      test('Should respond with no body content for a put request with a valid body', done => {
        superagent.put('localhost:3000/api/toy')
          .send({'_id': `${aNewID}`, 'name': 'Gavin', 'desc':'SlightlyAwesome'})
          .type('application/json')
          .end((err, res) => {
            expect(res.status).toEqual(400);
            done();
          });
      });
    });
  });
});
