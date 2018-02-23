// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var answer = {};
    if (currency > 10000) {
        answer['error'] = "You are rich, my friend! We don't have so much coins for exchange";
        return answer;
    }
    var h = Math.floor(currency/50);
    if (h>0) answer['H'] = h;

    var q = Math.floor((currency-h*50)/25);
    if (q>0) answer['Q'] = q;

    var d = Math.floor((currency-h*50-q*25)/10);
    if (d>0) answer['D'] = d;

    var n = Math.floor((currency-h*50-q*25-d*10)/5);
    if (n>0) answer['N'] = n;

    var p = Math.floor((currency-h*50-q*25-d*10-n*5)/1);
    if (p>0) answer['P'] = p;

    return answer;
}
