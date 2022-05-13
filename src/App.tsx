import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import background from './assets/img/back.jpg';
import {Counter} from "./components";

function App() {

    const buttonNames = ['Increment', 'Reset', 'Settings', 'Apply and Back'];

    const [newStartValue, setNewStartValue] = useState<number>(0);
    const [newMaxValue, setNewMaxValue] = useState<number>(5);

    const [startValue, setStartValue] = useState<number>(newStartValue);
    const [maxValue, setMaxValue] = useState<number>(newMaxValue);

    const [value, setValue] = useState<number>(startValue);

    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const sv = localStorage.getItem('startValue');
        const mv = localStorage.getItem('maxValue');
        if (sv) {
            sv && setNewStartValue(JSON.parse(sv));
            sv && setStartValue(JSON.parse(sv));
            setValue(JSON.parse(sv));
        }
        if (mv) {
            mv && setNewMaxValue(JSON.parse(mv));
            mv && setMaxValue(JSON.parse(mv));
        }


    }, [])


    const inc = () => {
        setValue(value + 1);
    }

    const reset = () => {
        setValue(startValue);
    }
    const set = () => {
        flag && localStorage.setItem('maxValue', JSON.stringify(newMaxValue));
        flag && localStorage.setItem('startValue', JSON.stringify(newStartValue));
        setFlag(!flag);
        setStartValue(newStartValue);
        setMaxValue(newMaxValue);
        setValue(newStartValue);
    }


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStartValue(JSON.parse(e.currentTarget.value));
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxValue(JSON.parse(e.currentTarget.value));
    }

    const disableInc = value === maxValue;
    const disableSet = newStartValue >= newMaxValue || newStartValue < 0;


    return (
        <div style={{
            backgroundImage: `url(${background})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh'
        }}>
            <div className="App">
                <Counter
                    buttonName={buttonNames}
                    value={value}
                    inc={inc}
                    reset={reset}
                    set={set}
                    flag={flag}
                    disableInc={disableInc}
                    disableSet={disableSet}
                    newStartValue={newStartValue}
                    newMaxValue={newMaxValue}
                    onChangeStartValue={onChangeStartValue}
                    onChangeMaxValue={onChangeMaxValue}
                />
            </div>
        </div>
    );
}

export default App;
