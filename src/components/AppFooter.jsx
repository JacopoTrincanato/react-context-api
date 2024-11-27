//creo il componente footer
export default function AppFooter() {
    //creo una variabile dove inserire il contenuto del footer
    const footerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur adipisci minus explicabo. Nesciunt in aspernatur necessitatibus labore illum ex. Aut quo laborum nisi optio labore maxime molestiae vel dolorum modi.';

    //eseguo il return
    return (
        <footer>
            <div className="container">
                <p>{footerText}</p>
            </div>
        </footer>

    )
}