// Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.



let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words,regex) {
  let result = [];
  for (let word of words) {
    
    if (regex.test(word)) {
      result.push(word);
    }    
  }
  return result;
}

// LS solution

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}



console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']