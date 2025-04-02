// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

// Hint - use an array

function oddLengths(arr){
	const lengths = arr.map(value => value.length); // declare variable
	return lengths.reduce((accumulator, element) => {
		if (element % 2 !== 0) {
			accumulator.push(element)
		}
		return accumulator;
	}, []);
}

// LS solution
function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

// Test case
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]