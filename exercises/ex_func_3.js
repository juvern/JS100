function catAge(humanYears) {
	if (humanYears === 0) {
		return catYears = 0;
	}
	if (humanYears === 1) {
		return catYears = 15;
	}
	if (humanYears === 2) {
		return catYears = 1*15 + 1*9;
	}
	return catYears = 1*15 + 1*9 + (humanYears-2)*4
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

function catAge(humanYears) {
	let catYears = 0
	switch (humanYears) {
		case 0:
			catYears = 0;
			break;
		case 1:
			catYears = 15;
			break;
		case 2:
			catYears = 24;
			break;
		default:
			catYears = 24 + (humanYears-2)*4;
	}
	return catYears;
}