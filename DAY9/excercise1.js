const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//Explain the difference between forEach, map, filter, and reduce.
// forEach is used to traverse the array and it modifies the original array
//map also traverse the array but it returns a new array
// filter return the array of elements based on the condition we provide
// reduce return the value of accumelator that we created 


//Define a callback function before you use it in forEach, map, filter or reduce.
function cb(element,index){
    console.log(element);
}

//Use forEach to console.log each country in the countries array.
countries.forEach(cb);

//Use forEach to console.log each name in the names array.
names.forEach(cb)

//Use forEach to console.log each number in the numbers array.
numbers.forEach(cb)

//Use map to create a new array by changing each country to uppercase in the countries array.
let newCountries = countries.map((c)=>c.toUpperCase());
console.log(newCountries);

//Use map to create an array of countries length from countries array.
let newCountriesLen = countries.map((c)=>c.length);
console.log(newCountriesLen);

//Use map to create a new array by changing each number to square in the numbers array
let newCountriesLenSquare = newCountriesLen.map((c)=>c*c);
console.log(newCountriesLenSquare);

//Use map to change to each name to uppercase in the names array
let newNames = names.map((n)=>n.toUpperCase())
console.log(newNames);

//Use map to map the products array to its corresponding prices.

let productPrice = products.map((p)=>p.price)
console.log(productPrice);

//Use filter to filter out countries containing land.
const cContain = countries.filter((c)=>c.includes('land')||c.includes('Land'));
console.log(cContain);

//Use filter to filter out countries having six character.
console.log(countries.filter((c)=>c.length===6));

//Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter((c)=>c.length>=6));

//Use filter to filter out country start with 'E';
console.log(countries.filter((c)=>c.startsWith('E')))

//Use filter to filter out only prices with values.

console.log(products.filter((p)=>typeof p.price === "number"));

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
  }
  
 
  const mixedArray = [1, 'hello', true, 'world', 42, 'example'];
  const stringList = getStringLists(mixedArray);
  console.log(stringList);

  //Use reduce to sum all the numbers in the numbers array.
  console.log(numbers.reduce((acc,ele,index)=>acc+=ele,0));

  //Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
  const concatenatedCountries = countries.reduce((accumulator, currentCountry, index) => {

    if (index !== 0) {
      accumulator += ", ";
    }   
    if (index === countries.length - 1) {
      accumulator += "and ";
    }
  
    accumulator += currentCountry;
    return accumulator;
  }, "");
  const sentence = `${concatenatedCountries} are north European countries.`;
console.log(sentence); 

//Explain the difference between some and every

//the main difference between both these is that some checks if atleast one element matches with the condition whereas every checks if every element macthes with the condition

//Use some to check if some names' length greater than seven in names array
console.log(names.some((ele)=>ele.length>7));

//Use every to check if all the countries contain the word land
console.log(countries.every((e)=>e.includes('land')));

//Explain the difference between find and findIndex.
// the main difference between find and findIndex is that find returns the first element itself else undefined where as findIndex returns the index of the element

//Use find to find the first country containing only six letters in the countries array
console.log(countries.find((c)=>c.length===6));

//Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex((c)=>c.length===6));

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((c)=>c==='Norway'));

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((c)=>c==='Russia'));