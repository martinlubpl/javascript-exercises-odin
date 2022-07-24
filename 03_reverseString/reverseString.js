const reverseString = function (str) {
    strArr = str.split('');
    strArr = strArr.reverse();
    return strArr.join("");
};
console.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
