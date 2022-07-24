const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	const sumArray = arr.reduce((prev,curr) => prev + curr, 0);
  return sumArray
};

const multiply = function(arr) {
  const multiplyArr = arr.reduce((prev, curr) => prev * curr, 1);
  return multiplyArr
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(num) {
  if(num===0 || num===1) return 1;
  let fact = 1;
	for(let i=num; i>1; i--) {
    fact *= i;
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
