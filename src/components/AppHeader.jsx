//importo la Navbar
import Navbar from "./Navbar";

//creo il componente AppHeader
export default function AppHeader() {
    //creo una variabile dove inserire il titolo
    const title = 'Il mio blog';

    //eseguo il return
    return (
        <header>
            <h1>{title}</h1>

            <Navbar />
        </header>

    )
}