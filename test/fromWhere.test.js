let assert = require("assert");
let fromWhere = require("../fromWhere");
describe('The fromWhere function', function(){

    it('should compare the regestration number to the city', function(){
        assert.equal(fromWhere('CY'),'Bellville')
    });
    it('should compare the regestration number to the city', function(){
        assert.equal(fromWhere('CC'),'Some other place!')
    });
});
