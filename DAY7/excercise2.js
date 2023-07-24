console.log('====Excercise 2 start here====');

function solveLinEquation(a, b, c, x) {
    return (-c - (a * x)) / b;
  }
  
  function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
  
    if (discriminant < 0) {
      return 'No real roots';
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      return { [x]: x };
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { [x1]: x1, [x2]: x2 };
    }
  }
  
  function printArray(arr) {
    for (const value of arr) {
      console.log(value);
    }
  }
  
  function showDateTime() {
    const now = new Date();
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    console.log(formattedDate);
  }
  
  function swapValues(x, y) {
    [x, y] = [y, x];
    console.log(`x => ${x}, y => ${y}`);
  }
  
  function reverseArray(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  function capitalizeArray(arr) {
    return arr.map(item => item.toUpperCase());
  }
  
  function addItem(arr, item) {
    arr.push(item);
    return arr;
  }
  
  function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
  }
  
  function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }
  
  function sumOfOdds(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  function sumOfEven(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  function evensAndOdds(number) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    console.log(`The number of odds are ${oddCount}.`);
    console.log(`The number of evens are ${evenCount}.`);
  }
  
  function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  
  // Test calls for each function
  console.log(solveLinEquation(2, 3, 4, 5));
  console.log(solveQuadEquation(1, -1, -2));
  printArray([1, 2, 3, 4, 5]);
  showDateTime();
  swapValues(3, 4);
  console.log(reverseArray([1, 2, 3, 4, 5]));
  console.log(capitalizeArray(['a', 'b', 'c']));
  console.log(addItem([1, 2, 3], 4));
  console.log(removeItem([1, 2, 3, 4], 2));
  console.log(sumOfNumbers(5));
  console.log(sumOfOdds(10));
  console.log(sumOfEven(10));
  evensAndOdds(100);
  console.log(sum(1, 2, 3));
  