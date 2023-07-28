const icon = document.querySelector('.icon');
const text = document.querySelector('.textSpan');


const skillsSpan = document.querySelector('.spanSkills')

let currentIndex = 1;
const icons = ['🔥', '👨‍💻', '😼'];
const texts = ['Developer', 'Gamer', 'Programmer'];

const skills = ['Redux', 'React', 'NodeJs', 'Java', 'CSS']
const colors = ['red', 'blue', 'green', 'pink', 'purple']
let currentIndex2 = 1;
setInterval(() => {
    icon.textContent = icons[currentIndex];
    text.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % icons.length;

    skillsSpan.textContent = skills[currentIndex2]
    skillsSpan.style.color = colors[currentIndex2]
    currentIndex2 = (currentIndex2 + 1) % skills.length;
}, 2000)