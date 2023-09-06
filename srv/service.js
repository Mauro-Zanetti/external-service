const cds = require('@sap/cds');
const constants = require('./Constants.json');

module.exports = cds.service.impl(async function() {

	const service = await cds.connect.to('API_BUSINESS_PARTNER');

	this.on('READ', 'A_AddressEmailAddress', async req => {
		return await service.send({
            query: req.query,
            headers: {
                'APIKey': constants.APIKey
            }
        });
	});
});