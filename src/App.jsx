import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import ProductCard from './component/ProductCard'
import Offer from './component/Offer'
import Footer from './component/Footer'

function App() {
  return (
 <main className='relative min-h-screen overflow-x-hidden'>
   <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/30 to-indigo-300/20 rounded-full blur-[80px z-10]'/>
    <div className='overflow-hidden'>
      <Navbar />
      <Hero/>
      <About/>
      <ProductCard/>
      <Offer/>
      <Footer/>
     </div>
  </main>
  )
}

export default App