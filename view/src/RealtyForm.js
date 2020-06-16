import React from 'react';

import { validateRealtyForm, REALTY_FORM_FIELDS, REALTY_FORM_FIELDS_IDS } from './../../app/realty-form';

import './RealtyForm.css';

const PLACEHOLDERS = {
    [REALTY_FORM_FIELDS.NAME]: 'Имя',
    [REALTY_FORM_FIELDS.EMAIL]: 'Email',
    [REALTY_FORM_FIELDS.PHONE]: 'Телефон',
}

const getValueWithValidationError = (fieldId, value) => ({
    value,
    error: validateRealtyForm(fieldId, value)
});

class RealtyForm extends React.Component {
    state = {
        [REALTY_FORM_FIELDS.NAME]: { value: '' },
        [REALTY_FORM_FIELDS.PHONE]: { value: '' },
        [REALTY_FORM_FIELDS.EMAIL]: { value: '' },
    };

    handleChange = (fieldId, e) => {
        const value = e.target.value;
        const error = this.state[fieldId];
        const field = error ? getValueWithValidationError(fieldId, value) : { value };

        this.setState( { [fieldId]: field })
    }

    handleBlur = (fieldId) => {
        const value = this.state[fieldId].value;

        this.setState({ [fieldId]: getValueWithValidationError(fieldId, value) })
    }

    handleSubmit = e => {
        const updateStateObject = {};

        for(const fieldId in this.state) {
            const { value } = this.state[fieldId];

            updateStateObject[fieldId] = getValueWithValidationError(fieldId, value);
        }

        this.setState(updateStateObject);

        e.preventDefault();
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                {
                    REALTY_FORM_FIELDS_IDS.map(fieldId => {
                        const { error, value } = this.state[fieldId];

                        return (
                            <div
                                key={fieldId}
                                className="field"
                            >
                                <label className="label">
                                    {PLACEHOLDERS[fieldId]}
                                    <div className="input-group">
                                        <input
                                            className={"input" + (error ? " input_invalid" : "")}
                                            value={value}
                                            onChange={e => this.handleChange(fieldId, e)}
                                            onBlur={() => this.handleBlur(fieldId)}
                                        />
                                        {
                                            error && <span className="error">{error}</span>
                                        }
                                    </div>
                                </label>
                            </div>
                        )
                    })
                }
                <input
                    className="submit"
                    type="submit"
                    value="Сохранить"
                />
            </form>
        )
    }
}

export default RealtyForm;
