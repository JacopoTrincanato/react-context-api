//importo lo style
import style from './FormInputs.module.css'

//creo il componente FormInputs
export default function FormInputs({ inputData, setInputData }) {

    //creo una costante per i tag
    const tagList = [
        "Dolci",
        "Torte",
        "Ricette vegetariane",
        "Ricette al forno",
        "Antipasti",
        "Primi piatti",
        "Dolci veloci",
        "Ricette veloci",
        "Dolci al cioccolato"
    ];

    function handleFormField(e) {

        // Destrutturo gli attributi dell'evento target per ottenere name, value, type e checked
        const { name, value, type, checked } = e.target;

        // Controllo se il campo è un checkbox e se il nome è "tags"
        if (type === "checkbox" && name === "tags") {
            // Aggiorno lo stato dei tag nel inputData.
            setInputData((prevState) => ({
                // Mantengo invariato il resto dei dati nel inputData
                ...prevState,
                tags: checked

                    // Se il checkbox è selezionato, aggiungo il valore al campo tags
                    ? [...prevState.tags, value]

                    // Altrimenti, rimuovo il valore dal campo tags
                    : prevState.tags.filter((tag) => tag !== value),
            }));
        }
        // Per tutti gli altri campi
        else {
            setInputData({

                // Mantengo invariato il resto dei dati nel inputData
                ...inputData,

                // Aggiorno il campo corrispondente (name è la chiave del dato) con il valore inserito
                [name]: value,
            });
        }
    }

    //eseguo il return
    return (
        <>
            {/* Campo per il titolo del post */}
            <input type="text"
                placeholder="Inserisci il titolo"
                className={style.placeholder}
                name="title"
                required
                value={inputData.title}
                onChange={handleFormField}
            />

            {/* Campo per il link all'immagine */}
            <input type="text"
                placeholder="Inserisci l'immagine"
                className={style.placeholder}
                name="image"
                value={inputData.image}
                onChange={handleFormField} />

            {/* Campo per lo slug del post */}
            <input type="text"
                placeholder="Inserisci lo slug"
                className={style.placeholder}
                name="slug"
                value={inputData.slug}
                onChange={handleFormField} />

            {/* Campo per il contenuto del post */}
            <textarea name="content"
                placeholder="Inserisci il contenuto"
                id="content" rows="5"
                className={style.placeholder}
                value={inputData.content}
                onChange={handleFormField}>

            </textarea>

            {/* Checkbox per i vari tag*/}

            <div className={style.checkContainer}>
                {tagList.map((tag, index) => (
                    <div key={index}>
                        <input type="checkbox"
                            name="tags"
                            value={tag}
                            onChange={handleFormField}
                        /> {tag}
                    </div>))}
            </div>
        </>
    )
}