// Write a while loop that logs all odd natural numbers between 1 and 40.

let n = 0;

while (n < 40) {
	n += 1;
	if (n % 2 === 0) {
		continue;
	}
	console.log(n);
}