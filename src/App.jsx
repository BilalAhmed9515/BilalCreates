import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About_Us from './Components/About_Us/About_Us'
import Services from './Components/Services/Services'
import Contact_Us from './Components/Contact_Us/Contact_Us'
import Hero from './Components/Hero Section/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='./' element={<Home/>}/>
      <Route path='about_us' element={<About_Us/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact_us' element={<Contact_Us/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
