// What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.


// Snippet 1 - Never evaluates to be true so doesn't log anything
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// Snippet 2 - Always evaluates at least once so it logs once
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);