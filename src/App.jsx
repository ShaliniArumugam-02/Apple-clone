import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import VideoSection from './components/VideoSection';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <VideoSection/>
      <Hero/>
      <Product/>
      <Footer/>
    
    </>
  )
}

export default App
