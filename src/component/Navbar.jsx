import React from 'react'
import { useState, useEffect } from 'react'
import { RiDrinksFill } from "react-icons/ri"



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  
  const navLink = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#product", label: "Product" },
    { href: "#offer", label: "Offer" },
  ]

  return (
  <nav className='fixed top-0 left-0 bg-white/90 backdrop-blur-sm z-50 border-0 border-b-blue-600 shadow-sm w-full'>
    <div className='dark bg-white h-10 w-full md:flex justify-center'>
        {/* company name */}
        <div className='flex items-center flex-1/2'>
        <RiDrinksFill/> <span className='text-emerald-500 mr-1 ml-1 font-medium'>Marga</span> Smoothies
        </div>
      <div className='hidden md:flex items-center gap-10'>
        {
          navLink.map((link, index) => (
            <a key={index} href={link.href}
             onClick={() => setActiveLink(link.href)}
             className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 mr-2
             after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full
             ${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-500 hover:tetx-gray-800'}`}>
              {link.label}</a>
          ))
        }
      </div>

    </div>
  </nav>
  )
}

export default Navbar