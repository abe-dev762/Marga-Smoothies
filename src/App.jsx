import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import ProductCard from './component/ProductCard'
import Offer from './component/Offer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <ProductCard/>
      <Offer/>
    </div>
  )
}

export default App