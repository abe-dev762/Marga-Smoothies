import React from 'react'
import heroImage from '../assets/hero-img.jpg'


const Hero = () => {
  return (
    <section id='home'
    className='flex flex-col md:flex-row justify-between items-center px-4 md:px-6 lg:px-8 pt-30 pb-16 container mx-auto'>
        {/* left content */}
        <div className='w-full md:w-1/2 space-y-8'>
            <h1
            className='text-4xl md:text-5xl lg:text-6xl leading-tight'>
                The best {''}
                <span className='text-teal-500 relative inline-block'>Smoothies</span> you'll{''}
                <span className='absolute bottom-0 w-full h-0.5 bg-teal-200/60'></span>
                ever taste
                <span className='inline-block ml-2 animate-pulse'>🥤</span>
            </h1>
            <p className='text-gray-500 text-lg md:text-xl max-w-xl'>
                Made with premium fruits, a healthy drink for you!
            </p>
            <button className='font-medium bg-blue-600 text-white px-8 py-4 rounded-xl focus:outline-none focus:bg-blue-700 cursor-pointer hover:shadow-lg hover:shadow-blue-100 active:scale-95 transition-all'>Order Now</button>
        </div>

        {/* right content - image */}
        <div className='w-full md:w-1/2 mt-15 md:mt-3 md:pt-3 pl-0 md:pr-1 md:pl-12'>
            <div className='relative'>
                <img
                alt='smoothies'
                src={heroImage}
                className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 opacity-90'/>
            </div>
        </div>
    </section>
  )
}

export default Hero