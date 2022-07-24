const repeatString = function (str, reps) {
    if (reps < 0) return "ERROR";
    let returnString = '';
    for (let i = 0; i < reps; i++) {
        returnString += str;
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
