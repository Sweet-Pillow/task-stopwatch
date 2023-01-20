import Button from '../Button';
import Watch from './Watch';
import Style from './Stopwatch.module.scss';

export default function Stopwatch(){
    return(
        <div className={Style.stopwatch}>
            <p className={Style.title}>Choose a card and start the stopwatch</p>
            <div className={Style.watchWrapper}>
                <Watch />
            </div>
            <Button
                text="Start" 
            />
        </div>
    )
}