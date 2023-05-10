// let js = 'amazing';
// console.log(40 + 8);

// console.log('Jonas');
// console.log(23);

// let firstName = "Martin"

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name

// let jonas_matilda = "JN"
// let $function = 27

// let person = "jonas"
// let PI = 3.1415

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher"

// let job1 = "programmer"
// let job2 = "teacher"

// console.log(myFirstJob);

// // Datatypes
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun)

// console.log(typeof 23);
// console.log(typeof 'jonas');

// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun);

// let year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30
// age = 31

// const birthYear = 1991
// // birthYear = 1990

// var job = "Programming"
// job = "teacher"

// lastName = 'Rane'
// console.log(lastName);

// // Basic Operations

// // const now = 2037
// // const ageJonas = now - 1991
// // const ageSarah = now - 2018
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // const firstName = "Jonas"
// // const lastName = "Schmedtmann"
// console.log(firstName + ' ' + lastName);

// // Assignmet Operator
// // let x = 10 + 5
// // x += 10
// // x *= 4
// // x ++
// // x --
// // console.log(x); 

// // Comparison operator

// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);

// // const isFullAge = ageSarah >= 18

// console.log(now - 1991 > now -2018);

// // Operator Precedence

// const now = 2037

// const ageJonas = now - 1991
// const ageSarah = now - 2018

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

///////////////////////////////////////////
// Coding Challenge #1

// const massMark = 95
// const heightMark = 1.88
// const massJohn = 85
// const heightJohn = 1.76

// const BMIMark = massMark / heightMark ** 2
// const BMIJohn = massJohn / heightJohn ** 2

// const markHigherBMI = BMIMark > BMIJohn
// console.log(BMIMark, BMIJohn, markHigherBMI);

// console.log("Start from here");

// if (BMIMark > BMIJohn) {
//     console.log(`Marks BMI (${BMIMark}) is greater than Johns (${BMIJohn})`);
// } else {
//     console.log(`John BMI (${BMIJohn}) is higher than Marks BMI (${BMIMark})`);
// }

// ///////////////////////////////
// // Type Conversion and coercion

// const inputYear = '1991'
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion

// console.log('I am ' + 23 + ' year oid');
// console.log('23' - '10' - 3);
// console.log(typeof '23');
// console.log('23' / '2');

// let n = '1' + 1
// n = n - 1
// console.log(n);


// /////////////////////////////////////////
// // Truthy and Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean());
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job');
// }

// let height = 0
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// /////////////////////////////////////////////
// // Equity Operator: == vs ===
// const age = 18
// if (age === 18) console.log('You just become an adult :D (strict)');
// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"))
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else if (favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');

// /////////////////////////////////////////////
// // logical Operators
// const hasDriverLicense = true 
// const hasGoodVision = true

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasDriverLicense) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive....');
// }

// Coding Challenge #3

const scoreDolphins = (97 + 112 + 101) / 3
const scoreKoalas = (109 + 95 + 106) / 3
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win a trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win a trophy');
} else if (scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
}

////////////////////////////////////////////
// The switch Statment
const day = 'sunday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Plan to code structure');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

/////////////////////////////////////
// Statement and Expression

if (23 > 10) {
    const str = '23 is bigger'
}

const me = 'Jonas'
console.log(`I'm ${2037 - 1991} year old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator

const age = 23
const drink = age >= 18 ? 'wine' : 'water'
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

////////////////////////////////////
// Coding Challenge #4

var bill_amt = 40
const tip = `${bill_amt > 50 && bill_amt < 300 ? bill_amt * 0.2 : bill_amt * 0.15 }`;

console.log(`The bill was ${bill_amt}, the tip was ${tip} and the total value is ${bill_amt + tip}`);

// if (bill_amt > 50 && bill_amt < 300) {
//     const tip = bill_amt * 0.2
//     console.log(`The bill was ${bill_amt}, the tip was ${tip} and the total value is ${bill_amt + tip}`);
// } else {
//     const tip = bill_amt * 0.15
//     console.log(`The bill was ${bill_amt}, the tip was ${tip} and the total value is ${bill_amt + tip}`);
// }

// console.log(`The bill was ${bill_amt}`);















































