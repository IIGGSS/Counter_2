import React from 'react';
import s from './styles.module.css';

interface ButtonPropsInterface {
    buttonName: string,
    callback: () => void,
    disabled?: boolean,
    buttonClass: string
}

const Button: React.FC<ButtonPropsInterface> = ({buttonName, callback, disabled, buttonClass}) => {

    return (
        <button className={`${s.button} ${buttonClass}`} disabled={disabled} onClick={callback}>{buttonName}</button>
    );
};

export default Button;