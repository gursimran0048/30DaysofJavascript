//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    speak(){
        console.log(`${this.name} is ${this.age} years old`);
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
    run(){
        console.log(`${this.name} is running`);
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
}

//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs);
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
}
