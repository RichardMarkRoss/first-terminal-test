let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('counts all the cars from paarl in set parameter 1', function(){
        assert.equal(countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'),2)
    });

    it('counts all the cars from paarl in set parameter 2', function(){
        assert.equal(countAllPaarl('CJ 900, CJ 678 543, CJ 34567, CJ 67890, CJ 7864'),5)
    });

});
