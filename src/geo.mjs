/*

Geo

*/

import request from '@surfy/request';

class Geo {
	
	/*

	Surfy° Geo Constructor
	@conf API Key

	*/

	constructor(conf = {}){
		this.conf = conf;
	}

	/*

	Geo IP

	*/

	async ip(ip) {
		let result = await request({
			url: `${this.conf.endpoint}/geo/ip`,
			method: 'POST',
			headers: this.conf.headers,
			params: {
				ip: ip
			}
		});

		return result;
	}

	/*

	Reverse Geocoding

	*/

	async reverse(params) {
		
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

	async tz(params) {

		let result = await request({
			url: `${this.conf.endpoint}/geo/tz`,
			method: 'POST',
			headers: this.conf.headers,
			params: params
		});

		return result;
	}
};

export default Geo;