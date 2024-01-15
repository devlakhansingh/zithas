import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import About from './pages/About'
import Footer from './pages/Footer'
import ContactUs from './pages/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserList from './components/UserList'

const App = () => {


  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user-list' element={<UserList />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
