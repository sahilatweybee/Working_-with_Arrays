'use strict';

//////////////////////////////////////////
// Coding_Challenge-1
const checkDogs = function (dogsJulia, dogsKate) {
    let newDogsJulia = dogsJulia.slice();
    newDogsJulia.splice(0, 1);
    newDogsJulia.splice(-2);


    let dogs = newDogsJulia.concat(...dogsKate);
    console.log(dogs);

    dogs.forEach(function (dog, i) {
        console.log(dog >= 3 ? `Dog number ${i + 1} is an adult, and is ${dog} years old` :
            `Dog number ${i + 1} is still a puppy.`);
    });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//////////////////////////////////////////
// coding challenge-2
const calcAverageHumanAge = function (ages) {
    let humanAges = ages.map(age =>
        (age <= 2 ? 2 * age : 16 + age * 4)
    );
    console.log(humanAges);

    let adults = humanAges.filter(age => age >= 18);
    console.log(adults);

    let average = adults.reduce(
        (acc, age, _, arr) => acc + age / arr.length,
        0);
    console.log(`\n${average}`);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//////////////////////////////////////////
// coding challenge-3
const calcAverageHumanAgeArrow = ages => {
    let result = ages
        .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter(age => age >= 18)
        .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

    console.log(result);
}

calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]);




//////////////////////////////////////////
// Swaping Arrays
let x1 = [1, 2, 3, 4, 9];
let y1 = [5, 6, 7, 8];
console.log(`\nx1: ${x1}\ny1: ${y1}`);

x1 = x1.concat(y1);
y1 = x1.slice(0, -y1.length);
x1 = x1.slice(y1.length);
console.log(`\nx1: ${x1}\ny1: ${y1}`);


//////////////////////////////////////////
// Concatinating and Modifying Arrays
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let output = [];

let i = 0;
while(i < array1.length){
  output.push(array2[i], array1[array1.length-i-1]);
  i++;
}
console.log(`\n${output}`);

