const Ajv = require('ajv');

const { formats } = require('./formats');
const { formatError } = require('./formatError');

/**
 * Фабрика для создания клиентских валидторов
 * @param {Object} fieldIdsToSchemasMap - объект, сопоставляющий поле и схемы для валидации
 * пример: { name: 'contacts-name' }, где name - поле, contacts-name - id схемы валидация
 * @returns {Object}
 */
const validatorFactory = (fieldIdsToSchemasMap) => {
    const ajv = new Ajv();

    // кастомные форматы - телефон +71234567890, почта example@mail.com , дата DD.MM.YYYY , время HH:mm
    for (const { name, format } of formats) {
        ajv.addFormat(name, format);
    }

    for(const fieldId in fieldIdsToSchemasMap) {
        const schema = fieldIdsToSchemasMap[fieldId];

        ajv.addSchema(schema, fieldId);
    }


    return (fieldId, value) => {
        const schema = fieldIdsToSchemasMap[fieldId];

        if (! schema) {
            return;
        }

        ajv.validate(fieldId, { field: value });

        return ajv.errors ? formatError(ajv.errors) : undefined;
    };
};

module.exports = {
    validatorFactory
};
