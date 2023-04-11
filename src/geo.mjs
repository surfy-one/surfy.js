/*

Geo

*/

import request from '@surfy/request';

class Geo {
	
	/*

	Surfy° Geo Constructor
	@conf Email, API Key

	*/

	constructor(conf = {}){
		this.conf = conf;

		// Timezone Alias
		this.tz = this.timezone;
	}

	/*

	Geo IP

	*/

	async ip(ip){
		
		let result = await request({
			url: `${this.conf.endpoint}/geo/ip/${ip}`,
			method: 'POST',
			headers: this.conf.headers
		});

		return result;
	}

	/*

	Reverse Geocoding

	*/

	async reverse(params){
		
		let result = await request({
			url: `${this.conf.endpoint}/geo/reverse`,
			method: 'POST',
			headers: this.conf.headers,
			params: params
		});

		return result;
	}

	/*

	Timezone

	*/

	async timezone(params){

		let result = await request({
			url: `${this.conf.endpoint}/geo/timezone`,
			method: 'POST',
			headers: this.conf.headers,
			params: params
		});

		return result;
	}
};

export default Geo;