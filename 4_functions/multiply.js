let rlSync = require('readline-sync');

let prompt_num1 = rlSync.question("Enter the first number: ");
let prompt_num2 = rlSync.question("Enter the second number: ");

function multiply(num1,num2) {
	return num1*num2;
}

console.log(`${prompt_num1} * ${prompt_num2} = ${multiply(prompt_num1,prompt_num2)} `);