/*

Surfy°

*/
import Words from './words.mjs';

class Surfy {

	/*

	Surfy Constructor
	@conf Email, API Key

	*/

	constructor(conf={}){
		
		if(!conf.endpoint){
			conf.endpoint = 'https://api.surfy.one';
		}

		this.conf = conf;
		this.words = new Words(conf);
	}
};

export default Surfy;