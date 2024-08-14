# One Simple API for JavaScript

This repository contains all libraries for working with Surfy° Ecosystem in a JavaScript environment.

## Installation

```
npm install surfy
```

## Initialisation

```js

import Surfy from 'surfy';

const conf = {
	key: 'YOUR_FREE_API_KEY' // Get a key > https://api.surfy.one
};

const surfy = new Surfy(conf);

```

<br/>
<br/>

# Geo

```js

let geo = surfy.geo;

```

## Geo.ip()

```js

const result = await surfy.geo.ip('8.8.8.8');
console.log(result);

/*

JSON {
	ip: '8.8.8.8',
	code: 'US',
	country: 'United States of America',
	region: 'California',
	city: 'Mountain View',
	latitude: 37.405992,
	longitude: -122.078515,
	zip: '94043',
	timezone: {
		id: 'America/Los_Angeles',
		name: 'Pacific Daylight Time',
		gmt: 'GMT-07:00',
		offset: -420,
		localTime: '4/12/2023, 3:13:55 AM GMT-07:00'
	},
	status: true
}

*/

```

## Geo.reverse()

```js

const options = [-0.023309, 51.505563]; // [longitude, latitude]

const result = await surfy.geo.reverse(options);
console.log(result);

/*

JSON {
	status: true,
	coords: { latitude: 51.505563, longitude: -0.023309 },
	address: {
		historic: 'Relief Portrait of Michael von Clemm',
		road: 'Cabot Square',
		quarter: 'Canary Wharf',
		suburb: 'Isle of Dogs',
		borough: 'London Borough of Tower Hamlets',
		city: 'London',
		stateDistrict: 'Greater London',
		state: 'England',
		postcode: 'E14 4QQ',
		country: 'United Kingdom',
		countryCode: 'gb'
	},
	timezone: {
		id: 'Europe/London',
		name: 'British Summer Time',
		gmt: 'GMT+01:00',
		offset: 60,
		localTime: '4/12/2023, 11:13:55 AM GMT+01:00'
	}
}

*/

```

## Geo.tz()

```js

const options = [-0.023309, 51.505563]; // [longitude, latitude]

const result = await surfy.geo.tz(options); // Alias: surfy.geo.tz(options)
console.log(result);

/*

JSON {
	status: true,
	latitude: 51.505563,
	longitude: -0.023309,
	id: 'Europe/London',
	name: 'British Summer Time',
	gmt: 'GMT+01:00',
	offset: 60,
	localTime: '4/12/2023, 11:13:55AM GMT+01:00'
}

*/

```

<br/>
<br/>

## Words.translations()

```js

const options = {
	source: {
		'lang': 'en',
		'text': 'Hello Surfy!'
	},
	target: {
		'lang': 'fr'
	}
};

let result = await surfy.words.translate(options);
console.log(result);

/*

{
	status: true,
	source: { lang: 'en', text: 'Hello Surfy!' },
	target: { lang: 'fr', text: 'Bonjour Surfy!' }
}

*/

```

## Words.translations.languages()


```js

let result = await surfy.words.translate.languages();
console.log(result);

/*

{
	status: true,
	items: ['en-fr', 'en-it', 'en-ru', 'en-es',
		'en-uk', 'fr-en', 'fr-it', 'fr-ru',
		'fr-es', 'fr-uk', ...]
}

*/

```

<br/>

<br />
<br />

## License

This project is dedicated to the public domain. You can do whatever you want with it, with no restrictions.

## Feel free to reach out!

Alexander Yermolenko • [LinkedIn](https://www.linkedin.com/in/astroscout/) • [Surfy Foundation](https://hello.surfy.one)