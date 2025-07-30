let planets = ['Earth', 'Moon', 'Mars'];

function last(arr) {
	if (arr.length > 0) {
		return arr.at(-1);
	} else {
		return "The array is empty"
	}
}


console.log(last(planets));

// first(['Earth', 'Moon', 'Mars']); // 'Earth'