// Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.


// randomly initialize randomNumber to either 0 or 1 each time it is executed.
let randomNumber = Math.round(Math.random()); 

randomNumber === 0 ? console.log('Yes') : console.log('No');

console.log(randomNumber ? 'Yes!' : 'No.');

