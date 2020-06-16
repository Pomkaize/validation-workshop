const nameSchema = require('./fields/name.json');
const emailSchema = require('./fields/email.json');
const phoneSchema = require('./fields/phone.json');

const realtyFormGateSchema = {
    type: 'object',
    additionalProperties: false,
    required: [
        'name',
        'email',
        'phone'
    ],
    properties: {
        name: nameSchema.properties.field,
        email: emailSchema.properties.field,
        phone: phoneSchema.properties.field
    }
};

module.exports = {
    realtyFormGateSchema
};
