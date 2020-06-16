const RU_MOBILE_PHONE_REGEXP = /^\+7\d{10}$/;

const phoneFormat = {
    type: 'string',
    validate: (data) => {
        return Boolean(data.match(RU_MOBILE_PHONE_REGEXP));
    }
};

module.exports = {
    phoneFormat
};
