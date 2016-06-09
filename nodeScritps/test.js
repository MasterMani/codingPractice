var should = require('chai').should(),
    test = require('./index'),
    es = test.escape;

describe('#escape', function(){
  it('converts a to b', function(){
    es('&').should.equal('&amp;');
  })
})    