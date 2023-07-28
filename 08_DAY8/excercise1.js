//Create an empty object called dog
let dog = {};
//Print the the dog object on the console
console.log(dog);

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog = {
    name:'Tuffy',
    legs:4,
    color:'white',
    bark: ()=>'woof woof'
}

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());

//Set new properties the dog object: breed, getDogInfo
dog = {...dog,
    breed:'Pomerian',
    getDogInfo:'Some Info'
}

console.log(dog);