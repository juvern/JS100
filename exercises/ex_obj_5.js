let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

nestedPerson = [];

for (prop in person) {
  let arr = [];
  arr.push(prop);
  arr.push(person[prop]);
  nestedPerson.push(arr);
}

console.log(nestedPerson);

// LS solution
let nestedPerson = Object.entries(person);

// Another LS solution
let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}