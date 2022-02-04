import React from 'react'

// Import Form Components
import Input from './FormComponents/Input';
import RadioButton from './FormComponents/RadioButton';
import Select from './FormComponents/Select';
import CheckBoxGroup from "./FormComponents/CheckBoxGroup";

const FormikControl = (props) => {

    const {control, ...rest} = props;

    switch (control) {
        case 'input': return <Input {...rest} />;
        case 'select': return <Select {...rest} />;
        case 'radio': return <RadioButton {...rest} />;
        case 'checkbox': return <CheckBoxGroup {...rest} />;
        default: return null
    }
}

export default FormikControl;
