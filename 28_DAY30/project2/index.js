
const form = document.getElementById('myForm');

function setInputStyle(inputElement, isValid) {
    inputElement.style.outline = isValid ? '2px solid green' : '2px solid red';
}

document.getElementById('i1').addEventListener('input', function () {
    const isValid = /^[a-zA-Z0-9]{3,16}$/.test(this.value);
    document.getElementById('e1').style.display = isValid ? 'none' : 'block';
    setInputStyle(this, isValid);
});

document.getElementById('i2').addEventListener('input', function () {
    const isValid = /^[a-zA-Z0-9]{3,16}$/.test(this.value);
    document.getElementById('e2').style.display = isValid ? 'none' : 'block';
    setInputStyle(this, isValid);
});

document.getElementById('i3').addEventListener('input', function () {
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.value);
    document.getElementById('e3').style.display = isValid ? 'none' : 'block';
    setInputStyle(this, isValid);
});

document.getElementById('i4').addEventListener('input', function () {
    const isValid = /^[a-zA-Z0-9@_-]{6,20}$/.test(this.value);
    document.getElementById('e4').style.display = isValid ? 'none' : 'block';
    setInputStyle(this, isValid);
});

document.getElementById('i5').addEventListener('input', function () {
    const isValid = /^\d{3}-\d{4}-\d{4}$/.test(this.value);
    document.getElementById('e5').style.display = isValid ? 'none' : 'block';
    setInputStyle(this, isValid);
});


document.getElementById('i6').addEventListener('input', function () {
    const isValid = /^[a-zA-Z\s_-]{8,50}$/.test(this.value);
    document.getElementById('e6').style.display = isValid ? 'none' : 'block';
    setInputStyle(this, isValid);
});
form.addEventListener('submit', function (event) {
    event.preventDefault();
});
