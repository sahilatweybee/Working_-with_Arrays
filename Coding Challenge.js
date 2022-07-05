'use strict';

// Coding_Challenge-1

const checkDogs = function (dogsJulia, dogsKate) {
    let newDogsJulia = dogsJulia.slice();
    newDogsJulia.splice(0,1);
    newDogsJulia.splice(-2);


    let dogs = newDogsJulia.concat(...dogsKate); 
    console.log(dogs);

    dogs.forEach(function(dog, i) {
        console.log(dog >=3 ? `Dog number ${i+1} is an adult, and is ${dog} years old`:
        `Dog number ${i+1} is still a puppy.`);
    });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// coding challenge-2
const calcAverageHumanAge = function (ages) {
    let humanAges = ages.map(age =>
        (age <= 2 ? 2 * age : 16 + age * 4)
        );
    console.log(humanAges);

    let adults = humanAges.filter(age => age >= 18);
    console.log(adults);

    let average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0);
    console.log(`\n${average}`);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// coding challenge-3
const calcAverageHumanAgeArrow = ages =>{
    let result = ages
    .map(age =>(age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

    console.log(result);
}

calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]);