console.log("===Excercise 2 starts here===");
//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log(products.filter((p)=>typeof p.price === 'number').map((p)=>p.price).reduce((acc,e)=>acc+=e,0));

//Find the sum of price of products using only reduce reduce(callback))
console.log(products.reduce((acc,p)=>typeof p.price === 'number'?acc+=p.price:acc=acc,0))

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries(countries) {
    const categorizedCountries = {
      land: [],
      ia: [],
      island: [],
      stan: []
    };
    countries.forEach(country => {
      if (country.includes('land')||country.includes('Land')) {
        categorizedCountries.land.push(country);
      } else if (country.includes('ia')) {
        categorizedCountries.ia.push(country);
      } else if (country.includes('island')) {
        categorizedCountries.island.push(country);
      } else if (country.includes('stan')) {
        categorizedCountries.stan.push(country);
      }
    });
    return categorizedCountries;
  }

  console.log(categorizeCountries(countries));
  

  //Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
  function countStartingLetters(countries) {
    const letterCounts = countries.reduce((counts, country) => {
      const firstLetter = country[0].toUpperCase();
      if (/[A-Z]/.test(firstLetter)) {
        counts[firstLetter] = (counts[firstLetter] || 0) + 1;
      }
      return counts;
    }, {});
  
    return Object.entries(letterCounts).map(([letter, count]) => ({ letter, count }));
  }
console.log(countStartingLetters(countries));  
//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

function getFirstTenCountries(arr){
    return arr.filter((c,i)=>i<10)
}
console.log(getFirstTenCountries(countries));


function getLastTenCountries(countries) {
    if (countries.length <= 10){  
      return countries;
    } 
    else{
      return countries.slice(-10);
    }
  }
  console.log(getLastTenCountries(countries));

  //Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
  function findMostFrequentStartingLetter(countries) {
    const letterCounts = countries.reduce((counts, country) => {
      const firstLetter = country[0].toUpperCase();
      if (/[A-Z]/.test(firstLetter)) {
        counts[firstLetter] = (counts[firstLetter] || 0) + 1;
      }
      return counts;
    }, {});
  
    let mostFrequentLetter = '';
    let maxCount = 0;
  
    for (const letter in letterCounts) {
      if (letterCounts[letter] > maxCount) {
        mostFrequentLetter = letter;
        maxCount = letterCounts[letter];
      }
    }
  
    return mostFrequentLetter;
  }
  
  console.log(findMostFrequentStartingLetter(countries));
  