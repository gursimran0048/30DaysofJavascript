console.log('===Excercise 2 starts here===');

//Iterate through the users array and get all the keys of the object using destructuring
users.forEach((({name,scores,skills,age})=>console.log(name,scores,skills,age)))

//Find the persons who have less than two skills
console.log(users.filter(({skills})=>skills.length<2));