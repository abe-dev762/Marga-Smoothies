import React from 'react'
import carambola from '../assets/carambola.svg'
import coconut from '../assets/coconut.svg'
import cherry from '../assets/cherry.svg'


function About() {
  return (
    <section className='pt-10 pb-10 py-2 px-3 mt-5 w-screen' id='about'>
        <div className='container w-full h-25 flex items-center justify-between'>
            <div>
                <img
                src={carambola}
                className='h-20'/>
            </div>
            <div>
                <img
                src={coconut}
                className='h-20'/>
            </div>
            <div>
                <img
                src={cherry}
                className='h-20'/>
            </div>  
        </div>
        <h2 className='pb-5 mt-9 text-center text-3xl md:text-4xl lg:text-5xl text-teal-500 font-medium'>About us</h2>
        <div className='text-center text-sm pr-2 leading-tight sm:w-fit'>
            <div>
                <p className='text-xs px-2'>At <span className='text-teal-500 font-medium'>Marga</span> Smoothies, we're passionate about crafting smoothies that not only taste amazing but are made with the highest quality ingredients.</p>
                <p className='text-xs px-2'>Every smoothie we serve is blended with premium, hand-selected fruits to ensure a rich, natural flavor in every sip.

We believe healthy should never mean boring — that's why our smoothies are bursting with real fruit goodness and a taste you'll actually crave.</p>
            </div>
        </div>
    </section>
  )
}

export default About