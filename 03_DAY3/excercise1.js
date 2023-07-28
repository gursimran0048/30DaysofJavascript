//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Gursimranjit";
const lastName = "Singh";
const country = "India";
const city = "Kharar";
const age = 19;
const isMarried = false;
const year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Check if type of '10' is equal to 10

const num1 = "10";
const num2 = 10;
console.log(typeof num1 === typeof num2);

//Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10);

//Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
console.log("adwdw", 1223, true);

// Write three JavaScript statement which provide falsy value.
console.log("", undefined, null, 0);

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
/*
4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
*/

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

const pythonLength = "python".length;
const jargonLength = "jargon".length;
console.log(pythonLength !== jargonLength);

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
/*
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python */

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

console.log(!("dragon".includes("on") && "phython".includes("on")));

/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */

const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.toDateString());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(Date.now());
