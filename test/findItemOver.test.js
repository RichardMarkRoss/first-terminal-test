let assert = require("assert");
let findItemsOver = require("../findItemsOver");
describe('The findItemsOver function', function(){

    it('should find array over selected parameter', function(){
        assert.deepEqual(findItemsOver([{name:"apples",qty:10},{name:"pears",qty:37},{name:"bananas",qty:27},{name:"apples",qty:3}],20),[{name:"pears",qty:37},{name:"bananas",qty:27}])
    });

    it('should find array over 20', function(){
        assert.deepEqual(findItemsOver([{name:"grapes",qty:40},{name:"pears",qty:13},{name:"bananas",qty:9},{name:"apples",qty:30}],20),[{name:"grapes",qty:40},{name:"apples",qty:30}])
    });

});
