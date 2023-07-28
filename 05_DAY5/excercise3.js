// The following is an array of 10 students ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a,b)=>a-b);
console.log('Max-Age',ages[ages.length-1]);
console.log('Min-Age',ages[0]);
let m = parseInt((ages.length-1)/2);
console.log('Meadian age-:',ages[m]);

const tt=ages.reduce((acc,element,index)=>acc+=element,0);
console.log('Average',tt/ages.length);

console.log('Range-:',ages[ages.length-1]-ages[0]);

console.log(Math.abs(ages[0]-(tt/ages.length))===Math.abs((ages[ages.length-1]))-(tt/ages.length));

//Slice the first ten countries from the countries array
console.log(countries.slice(0,10));


//Find the middle country(ies) in the countries array
let mm = parseInt((countries.length-1)/2);
console.log(countries[mm],countries[mm+1]);

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

if(countries.length%2===0){
    let half1 = countries.slice(0,(countries.length-1)/2)
    let half2 = countries.slice((countries.length-1)/2,countries.length)
    console.log(half1);
    console.log(half2);
}else{
    countries.push('India')
}

console.log(countries);