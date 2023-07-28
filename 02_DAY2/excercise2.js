console.log('======Excercise 2 starts here=======')

//Using console.log() print out the following statement:

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)


//Using console.log() print out the following quote by Mother Teresa:

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const num1= '10';
const num2 = 10;
console.log(num1===num2) //false
console.log(parseInt(num1)===num2) //true

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const fNum = parseFloat('9.8');
console.log(fNum===num2) //false
console.log(Math.round(fNum)===num2) //true

//Check if 'on' is found in both python and jargon
const str1 = 'phython', strA='jargon';
console.log(str1.includes('on') && strA.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
const strD = 'I hope this course is not full of jargon';
console.log(strD.includes('jargon'));


//Generate a random number between 0 and 100 inclusively.
const randomNum = Math.floor(Math.random()*100);
console.log(randomNum)

//Generate a random number between 50 and 100 inclusively.
const randomNum2 = Math.floor(Math.random()*50)+50;
console.log(randomNum2)

//Generate a random number between 0 and 255 inclusively.
const randomNum3 = Math.floor(Math.random()*250);
console.log(randomNum3)

// Access the 'JavaScript' string characters using a random number.
const jsString = 'JavaScript';
console.log(jsString.charAt(Math.floor(Math.random()*jsString.length)))

//Use console.log() and escape characters to print the following pattern.
console.log(`1\t1\t1\t1\t1`);
console.log(`2\t1\t2\t4\t8`);
console.log(`3\t1\t3\t9\t27`);
console.log(`4\t1\t4\t16\t64`);
console.log(`5\t1\t5\t25\t125`);


//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = 'You cannot end a sentence with because because because is a conjunction';
const phraseToSlice = 'because because because';

const startIndex = sentence.indexOf(phraseToSlice);
const endIndex = startIndex + phraseToSlice.length;

const slicedSentence = sentence.substr(0, startIndex-1) + sentence.substr(endIndex);

console.log(slicedSentence);
