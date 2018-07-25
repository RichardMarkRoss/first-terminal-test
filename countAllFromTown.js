module.exports = function (reg, town) {
  var fromTown = [];
  var cars = reg.split(',');
  for (var i = 0; i < cars.length; i++) {
    if (cars[i].startsWith(town)) {
      fromTown.push(cars[i]);
    }
  }
  return fromTown.length;
}