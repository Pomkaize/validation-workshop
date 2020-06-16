const { validatorFactory } = require('../lib/validatorFactory');

const nameSchema = require('./schemas/fields/name.json');
const emailSchema = require('./schemas/fields/email.json');
const phoneSchema = require('./schemas/fields/phone.json');

const { REALTY_FORM_FIELDS } = require('./fields');

const FIELDS_TO_SCHEMAS_MAP = {
    [REALTY_FORM_FIELDS.NAME]: nameSchema,
    [REALTY_FORM_FIELDS.EMAIL]: emailSchema,
    [REALTY_FORM_FIELDS.PHONE]: phoneSchema
};

const realtyFormValidator = validatorFactory(FIELDS_TO_SCHEMAS_MAP);

const validateRealtyForm = (fieldId, value) => realtyFormValidator(fieldId, value);

module.exports = {
    validateRealtyForm
};

