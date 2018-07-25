module.exports = function (item) {
    var man = [];
    //var name = '';
    for (var i = 0; i < item.length; i++) {
        var theitem = item[i];
        //console.log(theItem);
        if (theitem.qty > 20) {
            man.push(theitem) // = theitem.length;
            //name = theitem;

        }
    }
    //console.log(man)
    return man;
}