module.exports = function (paarl) {
    var listCar = [];
    var cars = paarl.split(', ');
    for (var i = 0; i < cars.length; i++) {

        if (cars[i].startsWith('CJ')) {
            listCar.push(cars[i])
        }

    }
    return listCar.length;
};