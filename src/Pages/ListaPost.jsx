//importo lo useState e useEffect
import { useState, useEffect, useContext } from "react";

//importo lo stile
import style from "../components/form/Form.module.css"

//importo la Card
//import Card from "../components/card/Card";

//importo PostContex
import PostContex from "../contexts/PostContex";

//creo il componente Form
export default function ListaPost() {

    const [postsData, setPostsData] = useState([])

    //consumo il context
    const { postCard } = useContext(PostContex)
    console.log(postCard);


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

            {Array.isArray(postsData) ? postsData.map((post, slug) => <div key={post.slug} cardPost={post} eliminatePost={eliminate} cardSlug={post.slug}>{postCard}</div>) : <p>Nessun risultato</p>}

            {/*Array.isArray(postsData) ? postsData.map(() => <div>{postCard}</div>) : <p>Nessun risultato</p>*/}
        </>
    )

}