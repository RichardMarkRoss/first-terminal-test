module.exports = function (plate, location) {
    var reg = plate.startsWith(location);
    return reg;
}