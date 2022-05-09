import './clock.css';
import { useEffect, useState } from 'react';

const Clock = () => {
    useEffect(() => {
        setInterval(setClock, 1000);
        return clearInterval(setClock);
    }, [])

    const getTime = () => {
        const currentDate = new Date();
        const newSecondRatio = currentDate.getSeconds() / 60;
        const newMinuteRatio = (newSecondRatio + currentDate.getMinutes()) / 60;
        const newHourRatio = (newMinuteRatio + currentDate.getHours()) / 12;
        return [newSecondRatio, newMinuteRatio, newHourRatio];
    }

    const [secondsRatio, setSecondsRatio] = useState(getTime()[0]);
    const [mintuesRatio, setMintuesRatio] = useState(getTime()[1]);
    const [hoursRatio, setHoursRatio] = useState(getTime()[2]);

    const setClock = () => {

        const [newSecondRatio, newMinuteRatio, newHourRatio] = getTime();
        setSecondsRatio(newSecondRatio);
        setMintuesRatio(newMinuteRatio);
        setHoursRatio(newHourRatio);
    }



    return (
        <div className="clock-container">
            <div className='mark'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val, idx) => <div className='number' key={val}>{val}</div>)
                }
            </div>

            <div className='hand hour' id='hour-hand' style={{ '--rotation': hoursRatio }}></div>
            <div className='hand minute' id='minute-hand' style={{ '--rotation': mintuesRatio }}></div>
            <div className='hand second' id='second-hand' style={{ '--rotation': secondsRatio }}></div>
        </div>
    )
}

export default Clock;