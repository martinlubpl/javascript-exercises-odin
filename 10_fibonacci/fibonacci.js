const fibonacci = function(num) {
    if (num < 1) return 'OOPS' 
    if (num == 1 || num == 2) {
        return 1
    }
    return fibonacci(num-2) + fibonacci(num-1)
};

console.log(fibonacci(7))
// Do not edit below this line
module.exports = fibonacci;
