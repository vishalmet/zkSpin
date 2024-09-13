import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Logo from "./assets/icon.png"

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const SpinPlayground = lazy(() => import('./pages/Playground'))
const Games = lazy(() => import('./pages/Game'))
const Contact = lazy(() => import('./pages/Contact'))

const App = () => {
  return (
    <div>
      <Router>
        {/* Suspense is used to display a fallback while lazy-loaded components are being fetched */}
        <Suspense fallback={<div className="flex justify-center items-center h-screen bg-black">
          <img className=' animate-spin' src={Logo} alt="" />
        </div>}>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/games' element={<Games />}></Route>
            <Route path='/playground' element={<SpinPlayground />}></Route>
            <Route path='/contactus' element={<Contact />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
