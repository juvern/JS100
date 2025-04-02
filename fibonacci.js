function fibonacci(n) {
	// base case
	if (n === 0 ) {
		return 0;
	} else if (n === 1) {
		return 1;
	}
	
	return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(0)); 		// => 0
console.log(fibonacci(1));		// => 1
console.log(fibonacci(2));		// => 1
console.log(fibonacci(3));		// => 2
console.log(fibonacci(4));		// => 3
console.log(fibonacci(5));		// => 5
console.log(fibonacci(6));		// => 8





