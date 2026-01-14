//your JS code here. If required.
const output = document.getElementById("output");

// Initial array
const arr = [1, 2, 3, 4];

// Initial Promise (resolves after 3 seconds with array)
function initialPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
}

// Start chained promises
initialPromise()
  .then(numbers => {
    // Filter even numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    // Return a promise with 1 second delay
    return new Promise(resolve => {
      setTimeout(() => {
        output.innerText = evenNumbers.toString(); // "2,4"
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    // Multiply even numbers by 2
    const multiplied = evenNumbers.map(num => num * 2);

    // Return a promise with 2 second delay
    return new Promise(resolve => {
      setTimeout(() => {
        output.innerText = multiplied.toString(); // "4,8"
        resolve(multiplied);
      }, 2000);
    });
  });
