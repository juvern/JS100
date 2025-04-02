// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

function checkForThree(numbers) {
	return numbers.includes(3)
}


let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(checkForThree(numbers1));
console.log(checkForThree(numbers2));
console.log(checkForThree(numbers3));