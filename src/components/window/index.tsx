import React, {ChangeEvent} from 'react';
import {Input} from "../index";
import s from './styles.module.css';

interface WindowPropsInterface {
    value: number,
    flag: boolean,
    disableInc: boolean,
    disableSet: boolean,
    newStartValue?: number,
    newMaxValue?: number,
    onChangeStartValue?: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeMaxValue?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Window: React.FC<WindowPropsInterface> = ({
                                                    value,
                                                    flag,
                                                    disableInc,
                                                    disableSet,
                                                    newStartValue,
                                                    newMaxValue,
                                                    onChangeStartValue,
                                                    onChangeMaxValue
                                                }) => {
    const windowDisabledClass = disableInc ? s.disabled : '';

    return (
        <>
            {flag ?
                <div className={s.window__settings}>
                    <div className={s.row}>
                        <span>Enter the maximum value:</span>
                        <Input value={newMaxValue} onChange={onChangeMaxValue} disable={disableSet}/>
                    </div>
                    <div className={s.row}>
                        <span>Enter the minimum value:</span>
                        <Input value={newStartValue} onChange={onChangeStartValue} disable={disableSet}/>
                    </div>
                </div>
                :
                <div className={`${s.window__counter} ${windowDisabledClass}`}>
                    {value}
                </div>
            }
        </>
    );
};

export default Window;