const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  //Find the person who has many skills in the users object.
  let maxSkills = 0;
  let pName='';
  for(let [key,value] of Object.entries(users)){
    if(maxSkills<value.skills.length){
        maxSkills = value.skills.length;
        pName = key;
    }
   
  }
  console.log(pName);

  //Count logged in users, count users having greater than equal to 50 points from the following object.
  let loginUser=0;
  let point50Users = 0;
  for(let [key,value] of Object.entries(users)){
    if(value.isLoggedIn){
       loginUser++;
    }
    if(value.points>=50){
        point50Users++;
    }
   
  }
  console.log('Login Users-:',loginUser);
  console.log('50+ points Users-:',point50Users);


  //Find people who are MERN stack developer from the users object
  function isMernStackDeveloper(user) {
    const requiredSkills = ['MongoDB', 'Express', 'React', 'Node'];
    return requiredSkills.every(skill => user.skills.includes(skill));
  }
  
  const mernDevelopers = []
  for(let user in users){
    if(isMernStackDeveloper(users[user])) mernDevelopers.push(users[user])
  }
  console.log(mernDevelopers);


//   Set your name in the users object without modifying the original users object
const newUsers = {...users,
    Gursimran: {
        email: 'thegursimranjit@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux','MongoDB','Express','Node Js'],
        age: 30,
        isLoggedIn: true,
        points: 50
      }
}
console.log(newUsers);

// Get all keys or properties and values of users object
for(let [key,value] of Object.entries(users)){
    console.log(key,value);
}

//Use the countries object to print a country name, capital, populations and languages.
const countries = {
   India:{
    name:'India',
    capital:'Delhi',
    population:"138 crores",
    languages:['Hindi','English','Punjabi','Haryanvi','Kannada','Sanskrit']
   },
   Pakistan:{
    name:'Pakistan',
    capital:'Lahore',
    population:"38 crores",
    languages:['Hindi','English','Punjabi','Urdu']
   },
   America:{
    name:'America',
    capital:'New York',
    population:"50 crores",
    languages:['English','Spanish']
   }
}

for(let [key,value] of Object.entries(countries)){
    console.log(key,value);
}