//importo useEffect e useState da react
import { useEffect, useState } from "react";

//importo useNavigate e useParams da react-router-dom
import { useNavigate, useParams } from "react-router-dom";

import style from '../components/card/Card.module.css'

//creo il componente PostPage
export default function PostPage() {

    //creo una costante navigate per navigare tra le pagine
    const navigate = useNavigate()

    //creo una costante che contiene i dati del post
    const [post, setPost] = useState()

    //creo una costante che contiene lo slug del post
    const { slug } = useParams()

    //creo una costante che contenga l'url
    const url = `http://localhost:3002/posts/${slug}`

    //fetcho i dati dall'endpoint dei post
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);

                const keys = Object.keys(data)
                //console.log(keys);

                if (keys.includes('error')) {
                    navigate('/404')
                } else {
                    setPost(data.data)
                }


            }).catch(err => {
                console.log(err);

            })
    }, [])

    //eseguo il return
    return (
        <>
            {
                post ? (
                    <div className={style.card}>
                        <div className={`${style.cardTop} ${style.dFlex}`}>
                            {/* Immagine associata al post, con un testo alternativo generico. */}

                            <img src={'http://localhost:3002/posts/../img/' + post.image} alt="immagine" />

                        </div>

                        <div className={style.cardBottom}>
                            {/* Titolo del post */}
                            <h3 className={style.mt1}>{post.title}</h3>
                            {/* Contenuto del post */}
                            <p className={style.mt1}>{post.content}</p>

                            <p className={style.mt1}>
                                {/* Mostra i tag associati al post. */}
                                {Array.isArray(post.tags) && post.tags.map((tag, index) => (
                                    <span key={index}>
                                        {/* I tag sono separati da uno spazio, senza aggiungere uno alla fine. */}
                                        {tag}{index < post.tags.length - 1 ? ' ' : ''}
                                    </span>
                                ))}
                            </p>

                        </div>
                    </div>
                ) :

                    (
                        <p>Il post non è presente</p>
                    )
            }

        </>
    )
}