//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  skills: ["HTML", "CSS", "JavaScript"],
  country: "USA",
  enrolled: {
    course1: {isEnrolled: true,key:'1234567poiuytre'},
    course2: {isEnrolled: false,key:null}
  }
};

localStorage.setItem('student', JSON.stringify(student));

