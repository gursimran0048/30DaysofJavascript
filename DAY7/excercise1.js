//Declare a function fullName and it print out your full name.
function fullName(){
    console.log('Gursimranjit Singh');
}

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName,lastName){
    console.log(firstName+' '+lastName);
}
fullName('Gursimranjit','Singh')

//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
    return a + b;
  }
  
  function areaOfRectangle(length, width) {
    return length * width;
  }
  
  function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
  }
  
  function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }
  
  function areaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  
  function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  function density(mass, volume) {
    return mass / volume;
  }
  
  function speed(distance, time) {
    return distance / time;
  }
  
  function weight(mass, gravity) {
    return mass * gravity;
  }
  
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function bmi(weight, height) {
    const heightInMeters = height * 0.01;
    return weight / (heightInMeters * heightInMeters);
  }
  
  function checkSeason(month) {
    if (month >= 3 && month <= 5) {
      return 'Spring';
    } else if (month >= 6 && month <= 8) {
      return 'Summer';
    } else if (month >= 9 && month <= 11) {
      return 'Autumn';
    } else {
      return 'Winter';
    }
  }
  
  function findMax(a, b, c) {
    let max = a;
    if (b > max) {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    return max;
  }
  
  // Call all the functions
  console.log(addNumbers(5, 10)); // Output: 15
  
  console.log(areaOfRectangle(4, 5)); // Output: 20
  
  console.log(perimeterOfRectangle(4, 5)); // Output: 18
  
  console.log(volumeOfRectPrism(3, 4, 5)); // Output: 60
  
  console.log(areaOfCircle(2)); // Output: 12.566370614359172
  
  console.log(circumOfCircle(2)); // Output: 12.566370614359172
  
  console.log(density(10, 2)); // Output: 5
  
  console.log(speed(100, 2)); // Output: 50
  
  console.log(weight(5, 9.8)); // Output: 49
  
  console.log(convertCelsiusToFahrenheit(30)); // Output: 86
  
  console.log(bmi(70, 1.75)); // Output: 22.857142857142858
  
  console.log(checkSeason(6)); // Output: Summer
  
  console.log(findMax(0, 10, 5)); // Output: 10
  
  console.log(findMax(0, -10, -2)); // Output: 0
  