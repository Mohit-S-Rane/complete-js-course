
// ///////////////////////////////////////
// // Activating Strict Mode

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'
// const private = 534

// ///////////////////////////////////////
// // Functions
// function logger() {
//     console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} orange.`
//     return juice
// }

// const appleOrangeJuice = fruitProcessor(5,0);
// console.log(appleOrangeJuice);

// const num = Number('23')

// ///////////////////////////////////////
// // Function Declarations vs. Expressions

// function calcAge1(birthYeah) {
//     return 2037 - birthYeah
// }

// const age1 = calcAge1(1991)

// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const age2 = calcAge2(1991)
// console.log(age1, age2);

// ///////////////////////////////////////
// // Arrow functions

// const calcAge3 = birthYeah => 2037 - birthYeah
// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 -age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// ///////////////////////////////////////
// // Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
//   }
  
//   function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
  
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
//   }
//   console.log(fruitProcessor(2, 3));
  
  
//   ///////////////////////////////////////
//   // Reviewing Functions
//     const calcAge = function (birthYeah) {
//       return 2037 - birthYeah
//     }

//     const yearsUntilRetirement_1 = function (birthYeah, firstName) {
//       const age = calcAge(birthYeah)
//       const retirement = 65 - age

//       if (retirement > 0) {
//         console.log(`${firstName} retired in ${retirement} years`);
//         return retirement
//       } else {
//         console.log(`${firstName} has already retired`);
//         return -1
//       }
//     }
//     console.log(yearsUntilRetirement_1(1991, 'Jonas'));
//     console.log(yearsUntilRetirement_1(1950, 'Mike'));

// ///////////////////////////////////////
// // Coding Challenge #1

// const calcAverage = (a,b,c) => (a+b+c) / 3

// const avgDolhins = calcAverage(85, 54, 41)
// const avgKoalas = calcAverage(23, 34, 27)

// const checkWinner = function(dolphinScore, koalasScore){
//   if (dolphinScore >= 2* koalasScore){
//     console.log(`Dolphins Wins (${dolphinScore} vs ${koalasScore})`);
//   } else if (koalasScore >= 2* dolphinScore) {
//     console.log(`Koalas Wins (${koalasScore} vs {dolphinScore})`);
//   } else {
//     console.log('No teams wins...');
//   }

// }

// checkWinner(avgDolhins, avgKoalas)

///////////////////////////////////////
// // Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
friends.unshift('Bob')
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

///////////////////////////////////////
// Coding Challenge #2

const calcTip = (bill) => bill >= 50 && bill <= 100 ? bill * 0.15 : bill * 0.2

const bills = [125, 555, 44]

const trip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

const totals = [bills[0] + trip[0] + bills[1] + trip[1] + bills[2] + trip[2]]

console.log(bills, trip, totals);




























































