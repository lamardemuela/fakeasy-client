import { Route, Routes } from 'react-router-dom'
import './App.css'

//* PAGES
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"
import Home from './pages/Home'
import DataGenerator from './pages/DataGenerator'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

//* COMPONENTS
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/generate-data" element={ <DataGenerator /> } />

        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />

        {/* ERROR PAGES */}
        <Route path="*" element={ <NotFound /> } />
        <Route path="/error" element={ <Error /> } />
      </Routes>

      <Footer />
    </>
  )
}

export default App
