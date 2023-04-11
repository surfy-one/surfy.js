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
	}

	async ip(ip){
		
		let result = await request({
			url: `${this.conf.endpoint}/geo/ip/${ip}`,
			method: 'POST',
			headers: this.conf.headers
		});

		return result;
	}
};

export default Geo;