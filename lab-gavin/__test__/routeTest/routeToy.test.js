const server = require('/Users/Gavin/codefellows/401/labs/08-vanilla-rest-api/lab-gavin/server.js');
const superagent = require('superagent');




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
      test('should return 400 when user doesnt send any data', done => {
        superagent.post('localhost:3000/api/toy')
          .set('Content-Type', 'text/plain')
          .end((err, res) => {
            expect(err).not.toBeNull();
            expect(res.status).toBe(400);
            done();
          });
      });

      test('Should return user with toy information PowerRanger and Totally Awesome Red Ranger', done => {
        superagent.post('localhost:3000/api/toy')
          .send({'name': 'PowerRanger', 'desc': 'Totally Awesome Red Ranger'})
          .type('application/json')
          .end((err, res) => {
            expect(res.body.name).toEqual('PowerRanger');
            expect(res.body.desc).toEqual('Totally Awesome Red Ranger');
            expect(res.status).toEqual(200);
            done();
          });
      });
    });
  });
//
//   describe('#DELETE', () => {
//     describe('POST method, /cowsay endpoint', () => {
//       test('should return 400 when user doesnt send any data', done => {
//         superagent.post('localhost:3000/cowsay')
//           .set('Content-Type', 'text/plain')
//           .end((err, res) => {
//             expect(err).not.toBeNull();
//             expect(res.status).toBe(400);
//             done();
//           });
//       });
//
//       test('Should return cowsay with "Hi, Im Cow"', done => {
//         superagent.post('localhost:3000/cowsay')
//           .send({'text': 'Hi, Im Cow'})
//           .type('application/json')
//           .end((err, res) => {
//             expect(res.text).toEqual({ text: JSON.stringify('Hi, Im Cow') });
//             expect(res.status).toEqual(200);
//             done();
//           });
//       });
//     });
//   });
//
//   describe('#PUT', () => {
//     describe('POST method, /cowsay endpoint', () => {
//       test('should return 400 when user doesnt send any data', done => {
//         superagent.post('localhost:3000/cowsay')
//           .set('Content-Type', 'text/plain')
//           .end((err, res) => {
//             expect(err).not.toBeNull();
//             expect(res.status).toBe(400);
//             done();
//           });
//       });
//
//       test('Should return cowsay with "Hi, Im Cow"', done => {
//         superagent.post('localhost:3000/cowsay')
//           .send({'text': 'Hi, Im Cow'})
//           .type('application/json')
//           .end((err, res) => {
//             expect(res.text).toEqual({ text: JSON.stringify('Hi, Im Cow') });
//             expect(res.status).toEqual(200);
//             done();
//           });
//       });
//     });
//   });
});
