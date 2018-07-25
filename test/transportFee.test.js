let assert = require("assert");
let transportFee = require("../transportFee");
describe('The transportFee function', function(){

    it('should check is the the time of day macthes amount', function(){
        assert.equal(transportFee('morning'),'R20')
    });
    it('should check is the the time of day macthes amount', function(){
        assert.equal(transportFee('nightshift'), 'free')
    });
});
