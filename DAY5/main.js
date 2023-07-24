
//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries);
console.log(webTechs);

//First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(/\s+/);
console.log(words)
console.log(words.length)


// In the following shopping cart add, remove, edit items
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const isAlergicToHoney = true;

if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}
if(isAlergicToHoney){
    let honeyIndex = shoppingCart.indexOf('Honey');
    if(honeyIndex!==-1)
    shoppingCart.splice(honeyIndex,1);
}

shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea')
console.log(shoppingCart);


//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const includesIgnoreCase = (arr, term) => {
    return arr.some(element => element.toUpperCase() === term.toUpperCase());
  };
if(!includesIgnoreCase(countries,'ETHIOPIA')){
    countries.push('Ethiopia');
}

console.log(countries);

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if(includesIgnoreCase(webTechs,'Saas')){
    console.log('Sass is a CSS preprocess');
}
else{
    webTechs.push('Saas');
}
console.log(webTechs);

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack);