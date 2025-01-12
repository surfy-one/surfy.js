/*

Words

*/

import request from '@surfy/request';

class Words {
	
	/*

	Surfy° Words Constructor
	@conf API Key

	*/

	constructor(conf = {}) {
		this.conf = conf;

		/*

		Get Languages

		*/
		
		this.translate.language = async () => {
			
			const result = await request({
				url: `${this.conf.endpoint}/words/translate/languages`,
				method: 'POST',
				headers: this.conf.headers
			});

			return result;
		}
	}

	/*

	Get Language Information
	
	@Success Response JSON:
	{
		"name": "French",      // The name of the detected language in English
		"native": "Français",  // The name of the detected language in its native form
		"code": "fr",          // ISO 639-1 language code
		"status": true         // Success
	}

	@Failure Response JSON:
	{
		"status": false        // Failed
	}
	
	*/

	async lang(text) {
		const result = await request({
			url: `${this.conf.endpoint}/words/lang`,
			method: 'POST',
			headers: this.conf.headers,
			params: {
				text: text
			}
		});

		return result;
	}

	async translate(params) {
		
		const result = await request({
			url: `${this.conf.endpoint}/words/translate`,
			method: 'POST',
			headers: this.conf.headers,
			params: params
		});

		return result;
	}
};

export default Words;