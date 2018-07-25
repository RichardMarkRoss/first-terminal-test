let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('the isFromBellville function', function(){

  it('if the number plate starts with CY should be correct',function(){
    assert.equal(isFromBellville('CY'),true)
  });
  it('if the number plate starts with CA should be false',function(){
    assert.equal(isFromBellville('CA'),false)
  });
});
