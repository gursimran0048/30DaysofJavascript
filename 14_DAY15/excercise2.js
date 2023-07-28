//Override the method you create in Animal class
class Dog1 extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs);
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
    sleep(){
        console.log('It is a dog and now sleeping'); 
    }
}


const dog1 = new Dog1('Luna', 2, 'brown', 4);
dog1.bark();
dog1.sleep();

