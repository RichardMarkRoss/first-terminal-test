let assert = require("assert");
let isWeekday = require("../isWeekday");
describe('isWeekday', function(){

    it('should test false if week day starts with S', function(){
        assert.equal(isWeekday('Saterday, Sunday'),false)
    });
    it('should test true if week day doesnt starts with S', function(){
        assert.equal(isWeekday('Monday, Tuesday'),true)
    });

});
