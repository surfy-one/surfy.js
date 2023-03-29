/*

ES6 Test

*/

console.log('\n== ES6 Test ==\n\n')

import Surfy from '../src/surfy.mjs';

import conf from '../conf.json' assert { type: 'json' };
const surfy = new Surfy(conf);
console.log(surfy)