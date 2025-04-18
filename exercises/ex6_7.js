// Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

function greet(iso) {
	switch (iso) {
		case 'en':
			return "Hi!";
		case 'fr':
			return 'Salut!';
		case 'pt':
			return "Ola!"
		default:
			return "Hello!";
		}
}


/* LS solution

Can write in one line. If use return statement, don't need to add break

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

*/


console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'