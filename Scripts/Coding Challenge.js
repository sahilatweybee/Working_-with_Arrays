'use strict';
/*
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
*/
// Coding Challenge-4
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
    `Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
    } `
);

const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

const checkEatingOkey = dog => dog.curFood > 0.9 * dog.recFood && dog.curFood < 1.10 * dog.recFood;
console.log(dogs.some(checkEatingOkey) + "\n");

let okeyEatingDogs = dogs.filter(checkEatingOkey);
console.log(okeyEatingDogs);

let dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);



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
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let output = [];
let i = 0;
array2.forEach((arr, i, array) => output.push(arr, array1[array.length - i - 1]));

// while (i < array1.length) {
//     output.push(array2[i], array1[array1.length - i - 1]);
//     i++;
// }
console.log(`\n${output}`);

//////////////////////////////////////////
// Employee Object Task
let employees = [{
    id: 1,
    name: 'Sahil'
}, {
    id: 2,
    name: 'Raj'
},
{
    id: 3,
    name: 'Dev'
}];

let Addresses = [{
    id: 1,
    age: 20,
    address: [{
        city: 'Rajkot',
        state: 'Gujarat',
        country: 'India'
    },
    {
        city: 'Bhayavadar',
        state: 'Gujarat',
        country: 'India'

    }]

},
{
    id: 2,
    age: 25,
    address: [{
        city: 'Rajkot',
        state: 'Gujarat',
        country: 'India'
    },
    {
        city: 'Rajkot',
        state: 'Gujarat',
        country: 'India'

    }]

},
{
    id: 3,
    age: 20,
    address: [{
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India'
    },
    {
        city: 'Rajkot',
        state: 'Rajasthan',
        country: 'India'

    }]

}
];
let name;
let id;


const displayEmployeeDetails = function (id) {
    for (let i=0; i<employees.length; i++) {
        if (employees[i].id == id) {
            let Info = employees.map(e => {
                let add = Addresses.filter(empl => e.id === empl.id);

                if (e.id === id) {
                    let Employee = {
                        id: e.id,
                        name: e.name,
                        address: add[0].address
                    }
                    return Employee;
                }

            });
            console.log(Info[i]);
            break;
        }
    }

}
employees.forEach((emp) => displayEmployeeDetails(emp.id));

