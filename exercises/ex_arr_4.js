let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

// vocabulary.forEach(
//   function(element) {
//     for (i = 0, i < vocabulary.length, i++, )
//       console.log(vocabulary);
//   });


for (let i = 0; i < vocabulary.length; i++ ) {
  if (Array.isArray(vocabulary[i])) {
    vocabulary[i].forEach((element) => console.log(element));
  }
}