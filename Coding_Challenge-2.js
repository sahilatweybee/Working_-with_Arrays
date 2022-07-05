'use strict';

const calcAverageHumanAge = function (ages) {
    let humanAges = ages.map(age =>
        (age <= 2 ? 2 * age : 16 + age * 4));
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