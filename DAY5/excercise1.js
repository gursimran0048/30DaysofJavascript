//Declare an empty array
const arr = [];


//Declare an array with more than 5 number of elements
const arr1 = [123,23,323,4,5,60,7,8];

//Find the length of your array
console.log(arr1.length);

//Get the first item, the middle item and the last item of the array
console.log(arr1[0],arr1[parseInt((arr1.length-1)/2)],arr1[arr1.length-1]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Name',56,67.23,'OOPs',false,[1,2,2,3],{isJs:true}]


//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length-1);

//Print the first company, middle and last company
console.log(itCompanies[0],itCompanies[(itCompanies.length-1)/2],itCompanies[itCompanies.length-1]);

// Print out each company
itCompanies.forEach((company)=>console.log(company));

//Change each company name to uppercase one by one and print them out
itCompanies.forEach((company,index)=>{
    itCompanies[index]= company.toUpperCase();
})
itCompanies.forEach((company)=>console.log(company));

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = ' are big IT companies.'
let companies = ''

itCompanies.forEach((company,index)=>{
    
   index<itCompanies.length-1? index<itCompanies.length-2? companies = companies + company + ',':companies=companies+company+' ':companies=companies+'and '+company + sentence;
})

console.log(companies);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let ele = 'Facebook';
console.log(itCompanies.includes(ele.toUpperCase()));

//Filter out companies which have more than one 'o' without the filter method
const filteredArray = [];

itCompanies.forEach((company)=>{
    company.match(/o/gi)?.length>1?filteredArray.push(company):''
})

console.log(filteredArray);

//Sort the array using sort() method
arr1.sort((a,b)=>a-b);
console.log(arr1);

//Reverse the array using reverse() method
arr1.reverse();
console.log(arr1);

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//Slice out the last 3 companies from the array
const last3 = itCompanies.length-3;
console.log(itCompanies.slice(last3,itCompanies.length));

//Slice out the middle IT company or companies from the array
let mstart = (itCompanies.length-1)/2
let mstartEnd = ((itCompanies.length-1)/2) + 1;
console.log(itCompanies.slice(mstart,mstartEnd));


//Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies);

//Remove the middle IT company or companies from the array
itCompanies.splice((itCompanies.length-1)/2,1);
console.log(itCompanies)

//Remove the last IT company from the array
itCompanies.splice(itCompanies.length-1,1);
console.log(itCompanies);

//Remove all IT companies
itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);