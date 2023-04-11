/*

ES6 Test

*/

console.log('\n== ES6 Test ==\n\n')

import Surfy from '../src/surfy.mjs';

import conf from '../conf.json' assert { type: 'json' };
const surfy = new Surfy(conf);
console.log(surfy)

let options, result;

/*

Words° Translations

*/

options = {
	source: {
		'lang': 'en',
		'text': 'Hello Surfy!'
	},
	target: {
		'lang': 'fr'
	}
};

result = await surfy.words.translate(options);
console.log('Translate:', result);

/*

Words° Language Pairs

*/

result = await surfy.words.translate.languages();
console.log('Languages:', result);

/*

Geo° IP

*/

result = await surfy.geo.ip('8.8.8.8');
console.log('Geo IP:', result);

/*

Geo° Reverse Geocoding

*/

options = {
	lat: 51.505563,
	lng: -0.023309
};

result = await surfy.geo.reverse(options);
console.log('Geo° Reverse Geocoding:', result);

/*

Geo° Timezone

*/

options = {
	lat: 51.505563,
	lng: -0.023309
};

result = await surfy.geo.tz(options);
console.log('Geo° Timezone:', result);
