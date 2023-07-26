//Stringify the students object with only firstName, lastName and skills properties

const students = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      skills: ["JavaScript", "HTML", "CSS"],
      grade: "A"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 22,
      skills: ["Python", "Java", "C++"],
      grade: "B"
    }
  ];
  
  const jsonString = JSON.stringify(students, ["firstName", "lastName", "skills"]);
  
  console.log(jsonString);
  
