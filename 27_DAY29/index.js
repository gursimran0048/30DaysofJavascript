const animationText = document.querySelector(".animation-text");
const fontFamilies = [
    "Arial, sans-serif",
    "Verdana, sans-serif",
    "Helvetica, sans-serif",
    "Tahoma, sans-serif",
    "Trebuchet MS, sans-serif",
    "Georgia, serif",
    "Times New Roman, serif",
    "Courier New, monospace",
    "Lucida Console, monospace",
    "Palatino Linotype, serif",
    "Garamond, serif",
    "Book Antiqua, serif",
    "Comic Sans MS, cursive",
    "Impact, sans-serif",
    "Arial Black, sans-serif",
    "Lucida Sans Unicode, sans-serif",
    "Arial Narrow, sans-serif",
    "Courier, monospace",
    "Geneva, sans-serif",
    "Lucida Grande, sans-serif",
    "Optima, sans-serif",
    "Verdana, Geneva, sans-serif",
    "Brush Script MT, cursive",
    "Copperplate, Copperplate Gothic Light, sans-serif",
    "Rockwell, serif",
    "Baskerville, serif",
    "Franklin Gothic Medium, sans-serif",
    "Cambria, serif",
    "Century Gothic, sans-serif",
    "Futura, sans-serif",
    "Myriad Pro, sans-serif",
    "Didot, serif",
    "Arial Rounded MT Bold, sans-serif",
    "Segoe UI, sans-serif",
    "Arial, Helvetica, sans-serif"
];


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomFontFamily() {
    const randomIndex = Math.floor(Math.random() * fontFamilies.length);
    return fontFamilies[randomIndex];
}

function setRandomColors() {
    const textContent = animationText.textContent;
    const animatedText = textContent.split("").map(letter => {
        return `<span style="color: ${getRandomColor()}">${letter}</span>`;
    }).join("");
    animationText.innerHTML = animatedText;

    document.getElementById('bb').style.backgroundColor = getRandomColor()
    animationText.style.fontFamily = getRandomFontFamily();
}

setInterval(setRandomColors, 1000);