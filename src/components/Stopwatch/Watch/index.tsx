import Style from './Watch.module.scss';

export default function Watch(){
    return(
    <>
        <span className={Style.clockNumber}>0</span>
        <span className={Style.clockNumber}>0</span>
        <span className={Style.clockDivision}>:</span>
        <span className={Style.clockNumber}>0</span>
        <span className={Style.clockNumber}>0</span>
    </>
    )
}