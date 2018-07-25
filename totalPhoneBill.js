module.exports = function (com) {
    var total = 0; // kept empty to add the values
    var sms = 0;
    var call = 0;
    var serv = com.split(', ');

    for (var i = 0; i < serv.length; i++) {
        if (serv[i].startsWith('s')) {
            sms = sms + 1; //counts from one instead of zero  
        } else {
            call = call + 1;
        }
    }


    total = call * 2.75 + sms * 0.65;
    return 'R' + total.toFixed(2); //toFixed rounds of to the decimal place you want.

}