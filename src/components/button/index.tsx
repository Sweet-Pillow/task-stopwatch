import Style from './Button.module.scss';

export default function Button ({text} : { text: string}) {
    return(
        <button className={Style.button}>
            {text}
        </button>
    )
}