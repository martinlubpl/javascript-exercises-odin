const findTheOldest = function(arr) {
    let ordered = arr.sort((prev,next) => {
        if (prev.yearOfDeath == undefined) prev.yearOfDeath = (new Date()).getFullYear();
        if (next.yearOfDeath == undefined) next.yearOfDeath = (new Date()).getFullYear();

        
        return (prev.yearOfDeath - prev.yearOfBirth) < (next.yearOfDeath - next.yearOfBirth) ? 1 : -1;
    })
    return ordered[0]
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
