let assert = require("assert");
let countRegNumber = require("../countRegNumber");
describe('countRegNumber', function(){

    it('Should return the amount of registration numbers', function(){
        assert.equal(countRegNumber('CA 52415,CY 786587, CJ 87248'),3)
    });

    it('Should return the amount of registration numbers', function(){
        assert.equal(countRegNumber('CA 52415,CY 786587, CJ 87248,CY 45681'),4)
    });

});
