module.exports = function (year) {
    var date = new Date();
    var cent = date.getFullYear();
    var dateIn = cent - year;
    return dateIn;
}