//Create a closure which has three inner functions
let app = function () {
  let counter = 0;
  let increment = function () {
    counter++;
  };
  let decrement = function () {
    counter--;
  };
  let getCounter = function () {
    return counter;
  };
  return {
    counter: getCounter,
    increment: increment,
    decrement: decrement,
  };
};

var counter = app();

counter.increment();
console.log(counter.counter());
