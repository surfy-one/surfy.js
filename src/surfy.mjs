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
		this.conf = conf;
		this.words = new Words(conf);
	}
};

export default Surfy;