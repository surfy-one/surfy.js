async function Surfy(conf={}) {
	let surfyModule = await import('./surfy.mjs');
	return new surfyModule.default(conf);
}

module.exports = Surfy;