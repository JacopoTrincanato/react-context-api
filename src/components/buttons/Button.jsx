//importo lo stile
import style from './Button.module.css'

//creo il componente Button
export default function Button() {
    //creo una variabile per il testo del bottone
    const buttontext = 'leggi di più';

    //eseguo il return
    return (
        <button className={`${style.btn} ${style.mt1}`}>{buttontext.toUpperCase()}</button>
    )
}