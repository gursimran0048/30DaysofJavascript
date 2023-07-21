// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

const isOldEnoughToDrive = ()=>{
    const age = prompt("Enter your age:");
    age>=18?console.log(`You are old enough to drive`):console.log(`You are left with ${18-age} years to drive.`)
}
// isOldEnoughToDrive();

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
const compareMyAgeAndYour = ()=>{
    const yourAge = prompt('Enter your age:');
    const myAge = 19;
    if(yourAge>myAge)
    console.log(`You are ${yourAge-myAge} years older than me`);
    else if(yourAge<myAge)
    console.log(`I am ${myAge-yourAge} years older than you`);
    else
    console.log(`We have same age`);
}

// compareMyAgeAndYour();


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3

let a = 4;
let b = 3;

//using ternary operator
a>b?console.log(`${a} is greater than ${b}`):b>a?console.log(`${b} is greater than ${a}`):console.log('Equal');

//using if else
// if(a>b)
// console.log(`${a} is greater than ${b}`)
// else if(b>a)
// console.log(`${b} is greater than ${a}`)
// else
// console.log('Equal')


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

function checkEven(){
    const num = prompt('Enter a number:');
    num%2===0?console.log(`${num} is an even number`):console.log(`${num} is an odd number`);
}

// checkEven();