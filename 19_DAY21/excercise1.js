//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const p1 = document.querySelector("p");
console.log(p1);

//Get each of the the paragraph using document.querySelector('#id') and by their id
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
console.log(p2, p3, p4);

//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const nodeList = document.querySelectorAll("p");
console.log(nodeList);

//Loop through the nodeList and get the text content of each paragraph

nodeList.forEach((node) => console.log(node.textContent));

//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
p4.textContent = "Fourth Paragraph";
console.log(p4.textContent);

//Set id and class attribute for all the paragraphs using different attribute setting methods
p1.setAttribute("id", "p1");
p2.setAttribute("id", "p2");
p3.setAttribute("id", "p3");
p4.setAttribute("id", "p4");
p1.setAttribute("class", "p1");
p2.setAttribute("class", "p2");

p3.className = "p3";
