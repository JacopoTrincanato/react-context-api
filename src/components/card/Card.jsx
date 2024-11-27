//importo lo stile
import style from './Card.module.css'

//importo il bottone
import Button from '../buttons/Button';

//importo le icone di fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

//creo il componente Card e gli aggiungo la props post
export default function Card({ cardPost, cardSlug, eliminatePost }) {

    //eseguo il return
    return (
        <>
            {/*Se cardPost esiste e se il post è pubblicato genera un nuovo post */}
            {cardPost && (
                <div className={style.card}>
                    <div className={`${style.cardTop} ${style.dFlex}`}>
                        {/* Immagine associata al post, con un testo alternativo generico. */}
                        <Link to={`/listapost/${cardSlug}`}>
                            <img src={'http://localhost:3002/posts/../img/' + cardPost.image} alt="immagine" />
                        </Link>

                    </div>

                    <div className={style.cardBottom}>
                        {/* Titolo del post */}
                        <h3 className={style.mt1}>{cardPost.title}</h3>
                        {/* Contenuto del post */}
                        <p className={style.mt1}>{cardPost.content}</p>

                        <p className={style.mt1}>
                            {/* Mostra i tag associati al post. */}
                            {Array.isArray(cardPost.tags) && cardPost.tags.map((tag, index) => (
                                <span className={style[tag]} key={index}>
                                    {/* I tag sono separati da uno spazio, senza aggiungere uno alla fine. */}
                                    {tag}{index < cardPost.tags.length - 1 ? ' ' : ''}
                                </span>
                            ))}
                        </p>
                        {/* Componente Button) */}
                        <Button />

                        {/* Pulsante per eliminare il post. Passa l'indice come dato tramite `data-index`. */}
                        <button onClick={eliminatePost} data-slug={cardSlug} className={style.deleteBtn}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}