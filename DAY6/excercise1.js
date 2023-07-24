const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) console.log(i);
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) console.log(i);
let ii = 10;
while (i > 0) {
  console.log(i);
  i--;
}
let kk = 10;
do {
  console.log(kk);
  --kk;
} while (kk > 0);

//Iterate 0 to n using for loop
let n = 23;
for (let i = 0; i <= n; i++) console.log(i);

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
for (let i = 1; i <= 7; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
}

//   Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log("i i^2 i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${Math.pow(i, 2)}  ${Math.pow(i, 3)} `);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;
for (let i = 0; i <= 100; i++) sum += i;
console.log(sum);

let oddSum = 0;
let evenSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) oddSum += i;
  else evenSum += i;
}
console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`
);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arr1 = [evenSum, oddSum];
console.log(arr1);

//Develop a small script which generate array of 5 random numbers
function getRandomNumber(rr) {
  return Math.floor(Math.random() * 9 + 1) !== rr
    ? Math.floor(Math.random() * 9 + 1)
    : getRandomNumber(rr);
}
let rArr = [];
for (let i = 1; i <= 5; i++) {
  rArr.push(getRandomNumber());
}
console.log(rArr);

let rArr2 = [];

for (let i = 1; i <= 5; i++) {
  let rr = getRandomNumber();
  if (rArr2.includes(rr)) {
    rr = getRandomNumber(rr);
  }
  rArr2.push(rr);
}

console.log(rArr2);


//Develop a small script which generate a six characters random id:


function getSixCharId(){
    let id = '';
    id += getRandomNumber();
    id = id + alphabets[Math.floor(Math.random()*alphabets.length-1)]
    id += getRandomNumber();
    id = id + alphabets[Math.floor(Math.random()*alphabets.length-1)]
    id = id + alphabets[Math.floor(Math.random()*alphabets.length-1)]
    id = id + alphabets[Math.floor(Math.random()*alphabets.length-1)]
    return id;
}

console.log(getSixCharId());