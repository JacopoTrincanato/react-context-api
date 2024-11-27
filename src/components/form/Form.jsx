//importo lo useState e useEffect
import { useState, useEffect } from "react";

//importo lo stile
import style from "./Form.module.css"

//importo AddButton 
import AddButton from "../buttons/AddButton";

//importo la Card
import Card from "../card/Card";

//importo FormInputs
import FormInputs from "../FormInputs/FormInputs";

//Creo il modello iniziale del post
const addedPost = {
    title: "",
    slug: "",
    image: "",
    content: "",
    category: "",
    tags: [],
    published: false
}

//creo il componente Form
export default function Form() {
    const [formData, setFormData] = useState(addedPost)

    const [postsData, setPostsData] = useState([])

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

    //creo una funzione per aggiungere un post
    function addPost(e) {
        //Impedisco il comportamento predefinito del form
        e.preventDefault()

        //Creo un nuovo oggetto post combinando un ID univoco e uno slug (Date.now()) con i dati del modulo
        const newItem = {
            id: Date.now(),
            ...formData
        }

        //Faccio una chiamata AJAX di tipo post per aggiungere un post
        fetch('http://localhost:3002/posts', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', response)
                setPostsData(response.data || [])

            })
            .catch(error => console.error('Error:', error));

        //Resetto il modulo al modello iniziale dopo l'invio
        setFormData(addedPost)

    }

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

            <section>
                <h2>Aggiungi un nuovo post utilizzando il form</h2>

                <form onSubmit={addPost}>

                    {/* Componente FormInputs*/}
                    <FormInputs inputData={formData} setInputData={setFormData} />

                    {/* Componente AddButton*/}
                    <AddButton />

                </form>

            </section>

            {Array.isArray(postsData) ? postsData.map((post, slug) => <Card key={post.slug} cardPost={post} eliminatePost={eliminate} cardSlug={post.slug}></Card>) : <p>Nessun risultato</p>}
        </>
    )

}