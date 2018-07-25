let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");
describe('The findItemsOver20 function', function(){

    it('should find array that is over 20', function(){
        assert.deepEqual(findItemsOver20([{name:"apples",qty:10},{name:"pears",qty:37},{name:"bananas",qty:27},{name:"apples",qty:3}], 20),[{name:"pears",qty:37},{name:"bananas",qty:27}])
    });

    it('should find array that is over 20', function(){
        assert.deepEqual(findItemsOver20([{name:"grapes",qty:30},{name:"pears",qty:13},{name:"bananas",qty:11},{name:"apples",qty:26}], 20),[{name:"grapes",qty:30},{name:"apples",qty:26}])
    });

});
