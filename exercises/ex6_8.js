// Write a function that extracts the language code from a locale.


function extractLanguage(code) {
	console.log(code.slice(0,2));
}

/* LS solution

function extractLanguage(locale) {
  return locale.split('_')[0];
}

*/



extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'