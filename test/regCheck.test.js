let assert = require("assert");
let regCheck = require("../regCheck");
describe('regCheck', function(){

  it('should check if vehicles ends with GP', function(){
    assert.equal(regCheck('123456 GP', 'GP'),false)
  });

  it('should check if vehicles does not end with GP', function(){
    assert.equal(regCheck('987456 CY', 'CY'),false)
  });

});

