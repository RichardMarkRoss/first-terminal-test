module.exports = function (salesData) {

    var busin = " ";
    var house = 0;
    var final = {};

    for (var i = 0; i < salesData.length; i++) {
        var sale = salesData[i];
        if (final[sale.department] === undefined) {
            final[sale.department] = house;
            //console.log(final)
        }
        final[sale.department] += sale.sales;
        //console.log(final)
    }
    for (var key in final) {
        if (final[key] > house) {
            house = final[key];
            busin = key;
            console.log(final[key])

        }
    }

    return busin
}