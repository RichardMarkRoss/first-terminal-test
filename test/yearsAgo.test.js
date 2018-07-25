let assert = require("assert");
let yearsAgo = require("../yearsAgo");
describe('The yearsAgo function', function(){

    it('return how many years ago that 1918 was to the current year', function(){
        assert.equal(yearsAgo('1918'),100)
    });
    it('return how many years ago that 1900 was to the current year ', function(){
        assert.equal(yearsAgo('1900'),118)
    });

});
