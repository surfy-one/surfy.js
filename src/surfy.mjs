/*

Surfy°

*/

import Words from './words.mjs';
import Geo from './geo.mjs';

class Surfy {

	/*

	Surfy Constructor
	@conf API Key

	*/

	constructor(conf={}){
		
		if(!conf.endpoint){
			conf.endpoint = 'https://api.surfy.one';
		}

		this.conf = conf;
		
		this.conf.headers = {
			'x-api-key': this.conf.key
		};

		this.words = new Words(conf);
		this.geo = new Geo(conf);
	}
};

export default Surfy;