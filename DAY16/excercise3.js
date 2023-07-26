//Parse the txt JSON to object.
const data = JSON.parse(txt);
console.log(data)

//Find the user who has many skills from the variable stored in txt.
const skillsMap = {};
for(const [key, value] of Object.entries(data)){
    skillsMap[key] = value.skills.length;
}
let mostSkills = '';
let min = 0;
for(const [key, value] of Object.entries(skillsMap)){
   if(min<value){
    min = value;
    mostSkills = key;
   }
}
console.log(mostSkills)