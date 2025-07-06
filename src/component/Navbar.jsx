import React from 'react'
import { useState, useEffect } from 'react'
import { RiDrinksFill, RiHexagonFill } from "react-icons/ri"
import { LuSun, LuMoon } from "react-icons/lu"
import { HiX, HiMenu} from "react-icons/hi"
import DarkMode from './DarkMode'



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  
  const navLink = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#product", label: "Product" },
    { href: "#offer", label: "Offer" },
  ]

  return (
  <nav className='fixed top-0 left-0 bg-white/90 backdrop-blur-sm z-50 border-0 border-b-blue-600 shadow-sm w-full drop-shadow-md'>
    <div className='bg-gray-100 container mx-auto py-2 px-4 w-full md:flex justify-center'>
        {/* company name */}
        <div className='container flex items-center justify-start sm:px-6 lg:px-8 h-15 md:h-18 sm:h-13'>
        <span className='text-teal-500 text-2xl font-medium mr-2'>Marga</span><span className='text-2xl font-mono'> Smoothies</span>

        {/* mobile nav */}
        <button
        className='md:hidden p-2 ml-40'
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (<HiX className='h-6 w-6'/>) : (<HiMenu className='h-6 w-6'/>)}
        </button>
        {isMenuOpen && (
            <div className='md:hidden mt-0 block bg-gray-100 border-t border-gray-100 py-4 w-fit h-20'>
              <div className='container mx-auto px-4 space-y-4'>
                  {navLink.map((link, index) => (
                    <a
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    key={index}
                    className={`block text-sm font-medium py-2
                      ${activeLink === link.href ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
                      href={link.href}>{link.label}</a>
                  ))}
              </div>
            </div>
        )}
        
        </div>
        


        {/* desktop menu */}
      <div className='hidden md:flex items-center justify-between gap-10'>
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
      
        <div>
                <DarkMode/>
              </div>

    </div>
     
  </nav>
  )
}

export default Navbar