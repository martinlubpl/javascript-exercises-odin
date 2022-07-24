const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^A-Za-z]/g, '');
    pal = str.split('').reverse().join('');
    // console.log(pal, str);
    return (pal == str) ? true : false;

};

// Do not edit below this line
module.exports = palindromes;
