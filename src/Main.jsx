import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import PokeCardInfo from './PokeCardInfo';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
          <Router>
              <nav className="navbar">
                  <h1>Pokedex</h1>
              </nav>
              <Routes>
                  <Route path='/' element={<App />} />
                  <Route path='/cardinfo' element={<PokeCardInfo/>}  />
              </Routes>
              <Footer />
          </Router>

    </div>
  )
}

export default Main;