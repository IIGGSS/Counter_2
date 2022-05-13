import React, {ChangeEvent} from 'react';
import s from './styles.module.css';

interface InputPropsInterface {
    value?: number,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    disable: boolean
}

const Input: React.FC<InputPropsInterface> = ({value, onChange, disable}) => {

    const disableInputClass = disable ? s.disabled : '';

    return (
        <input className={`${s.input} ${disableInputClass}`} value={value} onChange={onChange} type="number"/>
    );
};

export default Input;