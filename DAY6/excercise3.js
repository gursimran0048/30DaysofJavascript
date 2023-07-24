console.log('=====Excercise 3 starts here====');

//Copy countries array(Avoid mutation)
const countries1 = [...countries];


//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = [...countries].sort();
console.log(sortedCountries);

//Sort the webTechs array and mernStack array
webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);

//Extract all the countries contain the word 'land' from the countries array and print it as array
const newCr = countries.filter((c)=>c.includes('land'));
console.log(newCr);

//Find the country containing the hightest number of characters in the countries array
const charsNum = findCountryWithLongestName(countries);
console.log(charsNum);

//Extract all the countries containing only four characters from the countries array and print it as array
const newcArr = countries.filter((c)=>c.length===4);
console.log(newcArr);

//Extract all the countries containing two or more words from the countries array and print it as array
const countriesWithTwoOrMoreWords = countries.filter(country => country.split(' ').length >= 2);
console.log(countriesWithTwoOrMoreWords);

//Reverse the countries array and capitalize each country and stored it as an array
countries1.reverse();
const captialCountry = countries1.map((c)=>c.toUpperCase())
console.log(captialCountry);