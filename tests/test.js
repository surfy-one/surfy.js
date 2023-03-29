/*

CommonJS Test

*/

console.log('\n\n== CommonJS Test ==\n\n')

const Surfy = require('../src/surfy.js');
const test = async () => {

	const conf = require('../conf.json');
	const surfy = await Surfy(conf);
	console.log(surfy)
};

test();