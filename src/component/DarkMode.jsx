import React from 'react'
import { LuLightbulb } from 'react-icons/lu'
import { FaLightbulb } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import lightButton from '../assets/light-mode-button.png'
import darkButton from '../assets/dark-mode-button.png'


const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

  return (
    <div className='relative'>
        <img src={lightButton}
        className={`cursor-pointer bg-amber-50 h-6 drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}/>

        <img src={darkButton}
        className='cursor-pointer h-6 drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300'
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}/>
    </div>
  )
}

export default DarkMode