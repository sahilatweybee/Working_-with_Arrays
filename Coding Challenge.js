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

