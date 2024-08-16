import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SpinPlayground from './pages/Playground'
import Navbar from './components/Navbar'
import Games from './pages/Game'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/games' element={<Games />}></Route>
          <Route path='/playground' element={<SpinPlayground />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App