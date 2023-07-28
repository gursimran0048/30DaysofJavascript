console.log('====Excercise 3 start here====');
function userIdGeneratedByUser() {
    const numCharacters = prompt("Enter the number of characters for each ID:");
    const numIds = prompt("Enter the number of IDs to generate:");
  
    const userIds = [];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < numIds; i++) {
      let userId = "";
      for (let j = 0; j < numCharacters; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        userId += characters[randomIndex];
      }
      userIds.push(userId);
    }
  
    return userIds.join("\n");
  }
  
  function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  function arrayOfHexaColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(hexColor);
    }
    return colors;
  }
  
  function arrayOfRgbColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = rgbColorGenerator();
      colors.push(color);
    }
    return colors;
  }
  
  function convertHexaToRgb(hexColor) {
    const hexValue = hexColor.replace("#", "");
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  function convertRgbToHexa(rgbColor) {
    const [r, g, b] = rgbColor
      .substring(rgbColor.indexOf("(") + 1, rgbColor.lastIndexOf(")"))
      .split(",")
      .map((val) => parseInt(val.trim(), 10));
  
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
  
    return `#${hexR}${hexG}${hexB}`;
  }
  
  function generateColors(type, numColors) {
    if (type === "hexa") {
      return arrayOfHexaColors(numColors);
    } else if (type === "rgb") {
      return arrayOfRgbColors(numColors);
    } else {
      return "Invalid color type. Use 'hexa' or 'rgb'.";
    }
  }
  
  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  function isEmpty(value) {
    return value === undefined || value === null || value === "";
  }
  
  function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }
  
  function sumOfArrayItems(arr) {
    if (!Array.isArray(arr)) {
      return "Invalid input. Please provide an array.";
    }
  
    if (arr.some((item) => typeof item !== "number")) {
      return "All array items should be of number type.";
    }
  
    return arr.reduce((acc, val) => acc + val, 0);
  }
  
  function average(arr) {
    if (!Array.isArray(arr)) {
      return "Invalid input. Please provide an array.";
    }
  
    if (arr.some((item) => typeof item !== "number")) {
      return "All array items should be of number type.";
    }
  
    return sumOfArrayItems(arr) / arr.length;
  }
  
  function modifyArray(arr) {
    if (arr.length >= 5) {
      arr[4] = arr[4].toUpperCase();
      return arr;
    } else {
      return "item not found";
    }
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function areAllUnique(arr) {
    return arr.length === new Set(arr).size;
  }
  
  function areAllSameType(arr) {
    const firstType = typeof arr[0];
    return arr.every((item) => typeof item === firstType);
  }
  
  function isValidVariable(variable) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(variable);
  }
  
  function sevenRandomNumbers() {
    const numbersSet = new Set();
    while (numbersSet.size < 7) {
      numbersSet.add(Math.floor(Math.random() * 10));
    }
    return Array.from(numbersSet);
  }
  
  function reverseCountries(countries) {
    return countries.slice().reverse();
  }
  
  // Testing the functions
//   console.log(userIdGeneratedByUser());
//   console.log(userIdGeneratedByUser());
  console.log(generateColors("hexa", 3));
  console.log(generateColors("hexa", 1));
  console.log(generateColors("rgb", 3));
  console.log(generateColors("rgb", 1));
  console.log(shuffleArray([1, 2, 3, 4, 5]));
  console.log(factorial(5));
  console.log(isEmpty(""));
  console.log(sum(1, 2, 3, 4, 5));
  console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
  console.log(average([1, 2, 3, 4, 5]));
  console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
  console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
  console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));
  console.log(isPrime(17));
  console.log(areAllUnique([1, 2, 3, 4, 5]));
  console.log(areAllSameType([1, 2, 3, 4, 5]));
  console.log(isValidVariable("hello"));
  console.log(sevenRandomNumbers());
  console.log(reverseCountries(['USA', 'Canada', 'Mexico', 'Brazil']));
  