//importo il componente Outlet
import { Outlet } from "react-router-dom";
//importo il componente AppHeader
import AppHeader from "./AppHeader";
//importo il componente AppFooter
import AppFooter from "./AppFooter";

//creo il componente Layout
export default function DefaultLayout() {
    //eseguo il return
    return (
        <>
            <AppHeader />

            {/*inserisco Outlet dentro main */}
            <main>
                <Outlet />
            </main>

            <AppFooter />
        </>
    )
}