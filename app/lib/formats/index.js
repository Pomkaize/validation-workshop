const { phoneFormat } = require('./phone');
const { emailFormat } = require('./email');

const formats = [
    {
        name: 'phone',
        format: phoneFormat
    },
    {
        name: 'email',
        format: emailFormat
    }
];

module.exports = {
    formats
};
