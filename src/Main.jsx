import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import PokeCardInfo from './PokeCardInfo';
import Footer from './Footer';
import { AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai'

const Main = () => {
  return (
    <div>
      <Router>
        <div id="top">top</div>
        <nav id="navbar">
          <h1>Pokedex</h1>
          <div className="navig">
            <a href="#top"><AiFillUpCircle /></a>
            <a href="#foot"><AiFillDownCircle /></a>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cardinfo' element={<PokeCardInfo />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default Main;