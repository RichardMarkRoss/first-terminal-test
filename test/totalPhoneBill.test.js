let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");
describe('The totalPhoneBill function', function(){

    it('should test the total amount off the phone bill', function(){
        assert.equal(totalPhoneBill('call'),'R2.75')
    });
    it('should test the total amount off the phone bill', function(){
        assert.equal(totalPhoneBill('call, sms'),'R3.40')
    });
    it('should test the total amount off the phone bill', function(){
        assert.equal(totalPhoneBill('call, sms, call'),'R6.15')
    });
    it('should test the total amount off the phone bill', function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45')
    });
});
