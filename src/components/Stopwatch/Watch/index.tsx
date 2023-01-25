import Style from './Watch.module.scss';

interface Props {
    time: number | undefined
}

export default function Watch({ time = 0}: Props){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondTen, secondUnit] = String(seconds).padStart(2, '0');

    return(
    <>
        <span className={Style.clockNumber}>
            {minuteTen}
        </span>
        <span className={Style.clockNumber}>
            {minuteUnit}
        </span>
        <span className={Style.clockDivision}>:</span>
        <span className={Style.clockNumber}>
            {secondTen}
        </span>
        <span className={Style.clockNumber}>
            {secondUnit}
        </span>
    </>
    )
}