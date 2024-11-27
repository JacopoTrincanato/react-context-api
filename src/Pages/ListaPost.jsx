//importo lo useState e useEffect
import { useEffect, useContext } from "react";

//importo lo stile
//import style from "../components/form/Form.module.css"

import style from "../components/card/Card.module.css"

//importo la Card
//import Card from "../components/card/Card";

//importo PostContex
import PostContex from "../contexts/PostContex";

//creo il componente Form
export default function ListaPost() {

    //const [postsData, setPostsData] = useState([])

    //consumo il context
    const { postsData, setPostsData } = useContext(PostContex)


    //creo la funzione fetchData
    function fetchData(url = 'http://localhost:3002/posts') {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.data);
                setPostsData(data.data)
            })
    }

    //creo la funzione handleClick
    function handleClick() {
        fetchData()
    }

    useEffect(fetchData, [])

    //creo una funzione per cancellare un post
    function eliminate(e) {

        //Ottengo lo slug del post da eliminare dal pulsante associato
        const slug = e.target.getAttribute('data-slug')

        console.log(slug);

        //Faccio una chiamata AJAX di tipo delete per cancellare un post
        fetch('http://localhost:3002/posts/' + slug, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                //Aggiorno lo stato con la lista filtrata
                setPostsData(response.data)

            })

    }

    //eseguo il return
    return (
        <>

            <button type='button' onClick={handleClick} className={style.fetchBtn}>Fetch Posts</button>

            {Array.isArray(postsData) ? postsData.map((post, slug) => <div key={post.slug} className={style.card}>
                {/* Titolo del post */}
                <h3 className={style.mt1}>{post.title}</h3>
                {/* Contenuto del post */}
                <p className={style.mt1}>{post.content}</p>

                <p className={style.mt1}>
                    {/* Mostra i tag associati al post. */}
                    {Array.isArray(post.tags) && post.tags.map((tag, index) => (
                        <span className={style[tag]} key={index}>
                            {/* I tag sono separati da uno spazio, senza aggiungere uno alla fine. */}
                            {tag}{index < post.tags.length - 1 ? ' ' : ''}
                        </span>
                    ))}
                </p>

                {/* Pulsante per eliminare il post. Passa l'indice come dato tramite `data-index`. */}
                <button onClick={eliminate} className={style.deleteBtn}>
                    elimina
                </button>
            </div>) : <p>Nessun risultato</p>
            }

            {/*Array.isArray(postsData) ? postsData.map((post, slug) => <div key={post.slug} cardPost={post} eliminatePost={eliminate} cardSlug={post.slug}>{postCard}</div>) : <p>Nessun risultato</p>*/}

            {/*Array.isArray(postsData) ? postsData.map(() => <div>{postCard}</div>) : <p>Nessun risultato</p>*/}
        </>
    )

}