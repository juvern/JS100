// Use reduce to compute the sum of the squares of all of the numbers in an array:

function sumOfSquares(arr) {
	let squares = arr.map(values => values * values);
	return sum = squares.reduce((accumulator, element) => accumulator + element);
}

// LS solution
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

// Test case
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83