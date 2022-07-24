const removeFromArray = function (arr, ...toRemove) {

    for (i = 0; i < toRemove.length; i++) {
        const ind = arr.indexOf(toRemove[i]);
        if (ind > -1) {
            arr.splice(ind, 1);
        }

    }
    // console.log(arr);
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
