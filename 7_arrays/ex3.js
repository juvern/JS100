// In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


for (i = 0; i < myArray.length; i += 1) {
  myArray[i].forEach(function(num){
    if (num % 2 === 0){
      console.log(num);
    }
  })
}

// LS solution

myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});