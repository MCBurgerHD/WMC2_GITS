const {sum} = require("../D_calculator/calculator");

function sumAll(a, b) {
    var sum =0;
    if(a==b) return a;
    for(i=0;i < a+b;i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;