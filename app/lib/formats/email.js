const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailFormat = {
    type: 'string',
    validate: (data) => {
        return Boolean(data.match(EMAIL_REGEXP));
    }
};

module.exports = {
    emailFormat
};
