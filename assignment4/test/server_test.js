var server = require('../server.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('server', function() {
  it('should return OK status on localhost homepage', function(done) {
    chai.request('http://localhost:8888').get('/time').end(function(err, response)
     {
      expect(response).to.have.status(200);
      done();
     });
  });
  it('check to see if unexpected pathname gets 404 status code', function(done) {
    chai.request('http://localhost:8888').get('/greett/jon').end(function(err, response)
     {
      expect(response).to.have.status(404);
      done();
     });
  });
  it('check to see if greet/name returns a string', function(done) {
    chai.request('http://localhost:8888').get('/greet/jon').end(function(err, response)
     {
      expect(response.text).to.be.a('string');
      done();
     });
  });
  it('check to see if greet/name returns Hello name', function(done) {
    chai.request('http://localhost:8888').get('/greet/jon').end(function(err, response)
     {
      expect(response.text).to.eql('Hello jon');
      done();
     });
  });
});
