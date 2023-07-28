//Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
  paragraphs[i].style.backgroundColor = "yellow";
  paragraphs[i].style.border = "1px solid black";
  paragraphs[i].style.fontSize = "20px";
  paragraphs[i].style.fontFamily = "Georgia, serif";
}

//Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for (let i = 0; i < paragraphs.length; i++) {
  if (i === 0 || i === 2) {
    paragraphs[i].style.color = "green";
  } else {
    paragraphs[i].style.color = "red";
  }
}

//Set text content, id and class to each paragraph
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = "Paragraph" + i;
  paragraphs[i].id = "p" + i;
  paragraphs[i].className = "p" + i;
}
