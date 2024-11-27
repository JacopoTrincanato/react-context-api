import './App.css'

//importo i componenti per la gestione delle rotte da react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

//importo DefaultLayout
import DefaultLayout from './src/components/DefaultLayout'

//importo Homepage
import Homepage from './src/Pages/Homepage'

//importo ChiSiamo
import ChiSiamo from './src/Pages/ChiSiamo'

//importo ListaPost
import ListaPost from './src/Pages/ListaPost'

//importo CreaPost
import CreaPost from './src/Pages/CreaPost'

//importo PostPage
import PostPage from './src/Pages/PostPage'
import NotFound from './src/Pages/NotFound'

function App() {

  return (
    <>

      {/*uso BrowserRouter come container delle rotte*/}
      <BrowserRouter>
        {/*uso Routes per inserire le route singole e poterle gestire singolarmente*/}
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/chisiamo' element={<ChiSiamo />}></Route>
            <Route path='/listapost' element={<ListaPost />}></Route>
            <Route path='/listapost/create' element={<CreaPost />}></Route>
            <Route path='/listapost/:slug' element={<PostPage />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
