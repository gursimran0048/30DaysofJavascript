//Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function createNumbers() {
    const numbersContainer = document.getElementById("numbersContainer");
  
    for (let i = 1; i <= 100; i++) {
      const numberDiv = document.createElement("div");
      numberDiv.className = 'number'
      numberDiv.textContent = i;
  
      if (i % 2 === 0) {
        numberDiv.classList.add("even");
      } else {
        numberDiv.classList.add("odd");
      }
  
      if (isPrime(i)) {
        numberDiv.classList.add("prime");
      }
  
      numbersContainer.appendChild(numberDiv);
    }
  }
  
  createNumbers();
  