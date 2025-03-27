function countdown(num) {
	
	for (let i = num; i > 0; i -= 1 ) {
		console.log(i);
	};
};


function countdownRecursive(num) {
	console.log(num);
	if (num > 1) {
		countdownRecursive(num - 1);
	}
};

// function countdownRecursive(num) {
//   if (num < 0) return;      // base case: stop when num is less than 0
//   console.log(num);         // do something (print)
//   countdown(num - 1);       // recursive case: call with a smaller number
// }


// countdown(3);
// countdown(6);


countdownRecursive(3);
