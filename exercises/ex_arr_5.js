let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];


function contains(city) {
	if(destinations.find((element) => element === city)) {
		return true;
	} else {
		return false;
	}
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false