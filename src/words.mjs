/*

Words

*/

import request from '@surfy/request';

class Words {
	
	/*

	Surfy° Words Constructor
	@conf Email, API Key

	*/

	constructor(conf = {}){
		this.conf = conf;

		/*

		Get Languages

		*/
		
		this.translate.languages = async () => {
			
			let result = await request({
				url: `${this.conf.endpoint}/words/translate/languages`,
				method: 'POST',
				headers: this.conf.headers
			});

			return result;
		}
	}

	async translate(params){
		
		let result = await request({
			url: `${this.conf.endpoint}/words/translate`,
			method: 'POST',
			headers: this.conf.headers,
			params: params
		});

		return result;
	}
};

export default Words;