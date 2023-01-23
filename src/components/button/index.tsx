import Style from './Button.module.scss';

export default function Button ({text, type} : { text: string; 
    type?: "button" | "submit" | "reset" | undefined}) {
    return(
        <button className={Style.button} type={type}>
            {text}
        </button>
    )
}