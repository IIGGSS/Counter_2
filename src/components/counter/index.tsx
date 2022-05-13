import React, {ChangeEvent} from 'react';
import {Button, Window} from "../index";
import s from './styles.module.css';

interface CounterPropsInterface {
    buttonName: string[],
    value: number,
    inc: () => void,
    reset: () => void,
    set: () => void,
    flag: boolean,
    disableInc: boolean,
    disableSet: boolean,
    newStartValue: number,
    newMaxValue: number,
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
}


const Counter: React.FC<CounterPropsInterface> = (props) => {
    return (
        <div className={s.counter__wrapper}>
            {
                props.flag ?
                    <div className={s.settings}>
                        <Window
                            flag={props.flag}
                            value={props.value}
                            disableInc={props.disableInc}
                            disableSet={props.disableSet}
                            newStartValue={props.newStartValue}
                            newMaxValue={props.newMaxValue}
                            onChangeStartValue={props.onChangeStartValue}
                            onChangeMaxValue={props.onChangeMaxValue}
                        />
                        <div className={s.buttons}>
                            <Button buttonClass={s.settingsButton} buttonName={props.buttonName[3]} callback={props.set}
                                    disabled={props.disableSet}/>
                        </div>
                    </div>
                    :
                    <div className={s.counter}>
                        <Window disableInc={props.disableInc} disableSet={props.disableSet} flag={props.flag}
                                value={props.value}/>
                        <div className={s.buttons}>
                            <Button buttonClass={`${s.counterButton} ${s.buttonInc}`} buttonName={props.buttonName[0]}
                                    callback={props.inc} disabled={props.disableInc}/>
                            <Button buttonClass={`${s.counterButton} ${s.buttonReset}`} buttonName={props.buttonName[1]}
                                    callback={props.reset}/>
                            <Button buttonClass={`${s.counterButton} ${s.buttonSet}`} buttonName={props.buttonName[2]}
                                    callback={props.set}/>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Counter;