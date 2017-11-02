import chai from 'chai';
const assert = require('chai').assert;
const superTest = require('supertest');
const mainApp = require('../Server/controller/recipeController');
const server = require('../Server/app');
const expect = chai.expect;
// get api and run it through supertest
const request = superTest(server);
describe('Test for Api routes', () => {
  let record = {};
  //    beforeEach() runs its program before each test cases
  beforeEach(() => {
    record = {
      id: 1,
      upvote: 70,
      downvote: 7,
      meal: 'stew',
      ingredients: ['yam','oil','salts'],
      body: "Peel your tuber of yam then slice it into pieces. Wash your yam and salt it then heat the oil at a medium heat in it put the yam. Wait for the yam to get done. Its ok if its golden but don't let it burn",
    };
  });
  //    test case to ensure app runs from start to finish
  it("should return done' : ", (done) => {
    request.get('/api/v1/recipe')
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });
  //    test case for create endpoint
  it("should return done' : ", (done) => {
    request.post('/api/v1/recipe')
      .send(record)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });
  //    test case for delete endpoint
  it("should return done' : ", (done) => {
    request.delete('/api/v1/recipe/:recipeid')
      .send(record)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });
  //    test case for update endpoint
  it("should return done' : ", (done) => {
    request.put('/api/v1/recipe/:recipeid')
      .send(record)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });
});
