const arr = ['Hello','hi','bye','Good','bad']
//create an empty set
const emptySet = new Set()

//Create a set containing 0 to 10 using loop
for(let i=0;i<=10;i++) emptySet.add(i)

console.log(emptySet);

//Remove an element from a set
emptySet.delete(5);

console.log(emptySet);
//Clear a set
emptySet.clear();
console.log(emptySet);

//Create a set of 5 string elements from array
const setString = new Set(arr);
console.log(setString);

//Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway']

const countriesMap = new Map(countries.map((c)=>[c,c.length]))
console.log(countriesMap);