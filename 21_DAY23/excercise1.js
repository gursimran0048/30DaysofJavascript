//Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.
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
  
  function createNumbers(n) {
    const numbersContainer = document.getElementById("numbersContainer");
  
    for (let i = 1; i <= n; i++) {
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
  
 const input = document.getElementById('num');
  const button = document.getElementById('btn');
  button.addEventListener('click',()=>{
   
    if (input.value !== '') {
        const parsedValue = parseInt(input.value);
        if (!isNaN(parsedValue)) {
            clearContainer(numbersContainer);
            createNumbers(parsedValue);
            document.getElementById('err').style.display = 'none'; // Hide the error message if it was displayed before
        } else {
            document.getElementById('err').style.display = 'block';
        }
    }

  })
  function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
//   createNumbers();
  