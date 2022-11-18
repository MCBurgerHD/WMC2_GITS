function add(a,b) {
	return a + b
}

function subtract(a,b) {
	return a - b
}

function sum(arr) {
    var index = 0
    var summe = 0
    for (i = 0; i > arr.length; i++) {
        summe += a[index]
        index++
    }
    return summe
}

function multiply(a,b) {
    return a * b
}

function power(a,b) {
	return a / b
}

function factorial(a,b) {
}

console.log(add(2,6))
console.log(subtract(10,4))
console.log(sum([1,3,5,7,9]))
console.log(multiply(2,4))
console.log(power(4,2))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
