// Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

let rlSync = require('readline-sync');
let prompt_num = rlSync.question("Enter a number: ");

function evenOrOdd(num) {
	if (num % 2 === 0) {
		console.log('even');
	} else {
		console.log('odd');
	}
}

evenOrOdd(prompt_num);