function fibonacci(number) {
    a = 1
    b = 1
    fib = 0
    for (i=0; i < number; i++){
     fib = a + b
     a = b
     b = fib
    }
return fib
}
console.log(fibonacci(3))


// Do not edit below this line
module.exports = fibonacci;
