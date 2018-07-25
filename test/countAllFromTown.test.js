let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){

    it('compare the parameter and says how much are from the CL location', function(){
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CL'),3)
    }); 

    it('compare the parameter and says how much are from the CY location', function(){
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CY'),1)
    });
  });
