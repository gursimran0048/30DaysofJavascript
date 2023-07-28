console.log("======Excercise-2 starts from here======");

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

function calculateAreadOfTriangle() {
  const base = prompt("Enter base:");
  const height = prompt("Enter height:");
  const area = 0.5 * parseFloat(base) * parseFloat(height);
  console.log(`The area of the triangle is ${area.toFixed(2)}`);
}
// calculateAreadOfTriangle();

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

function calculatePerimeterofTriangle() {
  const a = prompt("Enter side a:");
  const b = prompt("Enter side b:");
  const c = prompt("Enter side c:");

  const perimeter = parseFloat(a) + parseFloat(b) + parseFloat(c);
  console.log(`The perimeter of the triangle is ${perimeter.toFixed(2)}`);
}

// calculatePerimeterofTriangle();

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

function calculateAreaAndPerimeterOfRectangle() {
  const width = prompt("Enter width:");
  const length = prompt("Enter side length:");

  const area = parseFloat(width) * parseFloat(length);
  const perimeter = 2 * (parseFloat(width) + parseFloat(length));

  console.log(`The area of the rectangle is ${area.toFixed(2)}`);
  console.log(`The perimeter of the rectangle is ${perimeter.toFixed(2)}`);
}
// calculateAreaAndPerimeterOfRectangle();

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

function calculateAreaAndCirumferenceOfCircle() {
  const radius = prompt("Enter radius:");
  const PI = 3.14;
  const area = PI * parseFloat(radius) * parseFloat(radius);
  const circumference = 2 * PI * parseFloat(radius);

  console.log(`The area of the circle is ${area.toFixed(2)}`);
  console.log(`The circumference of the circle is ${circumference.toFixed(2)}`);
}
// calculateAreaAndCirumferenceOfCircle();

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
const slope = 2;
const yIntercept = -2;
const xIntercept = 1;

console.log(`Slope: ${slope}`);
console.log(`Y-intercept: ${yIntercept}`);
console.log(`X-intercept: ${xIntercept}`);

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const slope2 = (y2 - y1) / (x2 - x1);
console.log(slope2);

//Compare the slope of above two questions.
console.log(slope === slope2);

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
const calculateY = (x) => Math.pow(x, 2) + 6 * x + 9;
const arr = [];
for (let i = -100; i <= 100; i++) {
  if (calculateY(i) === 0) arr.push(i);
}
console.log(arr);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

function calculateRatePerHour() {
  const hours = prompt("Enter hours:");
  const rate = prompt("Enter rate per hour:");
  const ratePerHour = rate * hours;
  console.log(`Your weekly earning is ${ratePerHour}`);
}
// calculateRatePerHour();

//If the length of your name is greater than 7 say, your name is long else say your name is short.
function checkName() {
  const name = prompt("Enter your name:");
  name.length > 7 ? console.log("Long name") : console.log("Short name");
}

// checkName();

//Compare your first name length and your family name length and you should get this output.
let firstName1 = "Gursimranjit";
let lastName1 = "Singh";

firstName.length < lastName.length
  ? console.log(
      `Your first name, ${firstName1} is shorter than your family name, ${lastName1}`
    )
  : console.log(
      `Your first name, ${firstName1} is longer than your family name, ${lastName1}`
    );

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;

if (myAge > yourAge) console.log(`I am ${myAge - yourAge} older than you`);
else if (yourAge > myAge)
  console.log(`You are ${yourAge - myAge} older than me`);
else console.log(`We have same age`);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

function checkDrivingStatus() {
  const year = prompt("Enter birth year:");
  const currentYear = new Date().getFullYear();
  const gap = currentYear - parseInt(year);

  if (gap >= 18) {
    console.log(`You are ${gap}. You are old enough to drive`);
  } else {
    console.log(
      `You are ${gap}. You will be allowed to drive after ${18 - gap} years.`
    );
  }
}

// checkDrivingStatus();

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

function checkSecondsAPersonLived() {
  const years = prompt("Enter number of years you live:");
  const secondLived = yearsToSeconds(years);
  console.log(`You lived ${secondLived} seconds.`);
}
function yearsToSeconds(years) {
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInYear = 365.25; // Average number of days in a year (including leap years)

  const seconds =
    years * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
  return seconds;
}

// checkSecondsAPersonLived();

// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

const date1 = new Date();
const currentHours = date1.getHours();
const currentMin = date1.getMinutes();
const currentYear1 = date1.getFullYear();
const currentMonth = date1.getMonth() + 1;
const todayDate = date1.getDate();

console.log(
  `${currentYear1}-${currentMonth}-${todayDate} ${currentHours}:${currentMin}`
);
console.log(
  `${todayDate}-${currentMonth}-${currentYear1} ${currentHours}:${currentMin}`
);
console.log(
  `${todayDate}/${currentMonth}/${currentYear1} ${currentHours}:${currentMin}`
);
