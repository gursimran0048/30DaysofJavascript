//Develop a small script which generate any number of characters random id:



function getRandomNumber1(n=9){
    return Math.floor(Math.random()*n+1);
}


function getRandomString(n=6){
    let str= '';
    for(let i = 0; i<n; i++){
        if(getRandomNumber1()===i) str= str+getRandomNumber1();
        else str= str + alphabets[getRandomNumber1(alphabets.length-1)]
    }
    return str
}

console.log(getRandomString(30));



//Write a script which generates a random hexadecimal number.
function generateRandomHexadecimal() {
    const length = 6; 
  
    let hexNumber = "#"; 
  
   
    for (let i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 16); 
      const hexChar = randomDigit.toString(16); 
      hexNumber += hexChar; 
    }
  
    return hexNumber;
  }
  const randomHex = generateRandomHexadecimal();
  console.log(randomHex);
  



//Write a script which generates a random rgb color number.
  function generateRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  
    return rgbColor;
  }

  const randomRGB = generateRandomRGB();
  console.log(randomRGB);
  

  //Using the above countries array, create the following new array.
  const newArr = countries.map((country)=>country.toUpperCase())
  console.log(newArr);

  //Using the above countries array, create an array for countries length'.
  const newArr2 = countries.map((country)=>country.length)
  console.log(newArr2);



//   Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

const newArr3 = countries.map((country)=>[country,country.slice(0,3).toUpperCase(),country.length])
console.log(newArr3);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const newArr4 = countries.filter((c)=>c.includes('land'))
newArr4.length>0?console.log(newArr4):console.log('All these countries are without land');

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const newArr5 = countries.filter((c)=>c.endsWith('ia'))
newArr5.length>0?console.log(newArr5):console.log('These are countries ends without ia');

//Using the above countries array, find the country containing the biggest number of characters.
function findCountryWithLongestName(countriesArray) {
    return countriesArray.reduce((longestCountry, currentCountry) => {
      return currentCountry.length > longestCountry.length ? currentCountry : longestCountry;
    }, countriesArray[0]);
  }
  
console.log(findCountryWithLongestName(countries));

// Using the above countries array, find the country containing only 5 characters.

const newArr6 = countries.filter((c)=>c.length===5)
console.log(newArr6);

//Find the longest word in the webTechs array
console.log(findCountryWithLongestName(webTechs));

//Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const newArr37 = webTechs.map((t)=>[t,t.length])
console.log(newArr37);


const acronymMERN = mernStack.map(word => word[0]).join('');

console.log(acronymMERN);


//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for(ele of webTechs) console.log(ele);


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let start = 0;
let end = fruits.length-1;

while(start<end){

    let t = fruits[start];
    fruits[start] = fruits[end];
    fruits[end]=t;

    start++;
    end--;

}
console.log(fruits);


// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  
  for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
      console.log(fullStack[i][j]);
    }
  }
  