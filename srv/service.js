const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

	const service = await cds.connect.to('API_BUSINESS_PARTNER');

	this.on('READ', 'A_AddressEmailAddress', req => {
		return service.run(req.query);
	});
});