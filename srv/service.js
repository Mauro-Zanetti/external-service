const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

	const service = await cds.connect.to('API_BUSINESS_PARTNER');

	this.on('READ', 'A_AddressEmailAddress', async req => {
		const aux = await service.run(req.query);
		// const aux = await service.send({
        //     query: req.query,
        //     headers: {
        //         'APIKey': cds.env.requires.API_BUSINESS_PARTNER.credentials.headers.APIKey
        //     }
        // });
		return aux;
	});
});