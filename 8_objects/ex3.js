// Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement.


let myArray = {
  0: 'Kiro',
  1: 'Shiba Inu',
  2: 12,
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}