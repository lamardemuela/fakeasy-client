import { Route, Routes } from 'react-router-dom'
import './App.css'

//* PAGES
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"
import Home from './pages/Home'
import DataGenerator from './pages/DataGenerator'

//* COMPONENTS
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/generate-data" element={ <DataGenerator /> } />

        {/* ERROR PAGES */}
        <Route path="*" element={ <NotFound /> } />
        <Route path="/error" element={ <Error /> } />
      </Routes>
    </>
  )
}

export default App
