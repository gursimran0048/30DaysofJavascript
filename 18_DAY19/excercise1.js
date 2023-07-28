//Create a closure which has one inner function
const add = (a) => {
  return (b) => {
    console.log(a + b);
  };
};

const inner = add(10);
inner(20);
