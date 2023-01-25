import Button from '../Button';
import Watch from './Watch';
import Style from './Stopwatch.module.scss';
import timeToSeconds from '../../common/utils/date';
import ITask from '../../types/ITask';
import { useState, useEffect } from 'react';

interface Props {
    selected: ITask| undefined,
    finishTask: () => void
}
export default function Stopwatch({ selected, finishTask }: Props){
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]);

    function regress(count: number = 0){
        setTimeout(() => {
            if(count > 0){
                setTime(count - 1);
                return regress(count - 1);
            }
            finishTask();
        }, 1000);
    }

    return(
        <div className={Style.stopwatch}>
            <p className={Style.title}>Choose a card and start the stopwatch</p>
            <div className={Style.watchWrapper}>
                <Watch time={time}/>
            </div>
            <Button
                onClick={() => regress(time)}
                text="Start" 
                />
        </div>
    )
}