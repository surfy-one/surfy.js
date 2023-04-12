# Surfy° Ecosystem for JavaScript

This repository contains all libraries for working with Surfy° Ecosystem in a JavaScript environment.

## Installation

```
npm install surfy
```

## Initialisation

```js

import Surfy from 'surfy';

const conf = {
	email: "email@example.com",
	key: "YOUR_FREE_API_KEY" // Get a key > https://surfy.one/developers
};

const surfy = new Surfy(conf);

```

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

# Geo

```js

let geo = surfy.geo;

```

## Geo.ip()

```js

let result = await surfy.geo.ip('8.8.8.8');
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
	state: true,
	numIP: 134744072,
	time: 0.007
}

*/

```

## Geo.reverse()

```js

let options = {
	lat: 51.505563,
	lng: -0.023309
};
let result = await surfy.geo.reverse(options);
console.log(result);

/*

JSON {
	state: true,
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

<br />
<br />

## MIT License

Alexander Yermolenko • [surfy.one](https://surfy.one)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
