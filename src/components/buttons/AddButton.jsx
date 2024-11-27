//importo lo stile
import style from './AddButton.module.css'

//creo il componente AddButton
export default function AddButton() {
    //creo una variabile per il testo del bottone
    const addButtontext = 'aggiungi';

    //eseguo il return
    return (
        <button className={style.addBtn} type='submit'>{addButtontext.toUpperCase()}</button>
    )
}