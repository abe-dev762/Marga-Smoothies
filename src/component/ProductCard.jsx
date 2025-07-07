import React from 'react'
import mango from '../assets/mango.svg'
import pitaya from '../assets/pitaya.svg'
import avocado from '../assets/avocado.svg'
import pinapple from '../assets/pineapple.svg'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { fadeIn } from '../utility/motion'


const ProductData = [
  {
    id: 1,
    img: mango,
    title: "Mango Classic Smoothies",
    description: "A golden, velvety blend of ripe mangoes and creamy yogurt, sweetened naturally and finished with a splash of citrus. This smoothie is pure sunshine in a glass — refreshing, fruity, and bursting with tropical flavor.",
    price: 1.02,
  },
  {
    id: 2,
    img: pitaya,
    title: "Dragon Fruit Smoothies",
    description: "Bright, bold, and beautifully pink — this smoothie stars ripe dragon fruit, offering a mildly sweet, subtly earthy flavor. Blended with a splash of coconut water or almond milk, it’s light, hydrating, and perfect for a tropical refresh.",
    price: 1.50,
  },
  {
    id: 3,
    img: avocado,
    title: "Avocado Smoothies",
    description: "Smooth, rich, and ultra-creamy — this avocado smoothie is the ultimate in clean, green indulgence. With a subtle, nutty flavor and velvety texture, it’s a satisfying and nutrient-dense option perfect for breakfast or a midday boost.",
    price: 1.50,
  },
  {
    id: 4,
    img: pinapple,
    title: "Pineapple Smoothies",
    description: "Bursting with bright, tangy flavor, this smoothie is like sunshine in a glass. Made with sweet, juicy pineapple and a splash of coconut water or juice, it’s crisp, refreshing, and perfect for a hot day.",
    price: 1.20,
  },
]



const ProductCard = () => {


  return (
    <div className='mt-14 mb-12' id='product'>
      <div className='container'>
        {/* header */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-amber-300'>Smoothies for you</p>
          <h2 className='text-3xl font-bold'>Product</h2>
          <p className='text-xs text-gray-400'>Our smoothies are blended with real fruits, natural ingredients, and absolutely no artificial additives. Whether you're fueling up post-workout or looking for a healthy snack, each sip delivers rich flavor and essential nutrients to keep you energized and satisfied.</p>
        </div>
        {/* body */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-7'>
          {/* card section */}

          {ProductData.map((data) => (
            <motion.div
            variants={fadeIn('left', 0.6)}
            initial='hidden'
            whileInView='show'
            className='px-2 mx-2' key={data.id}>
              <img
              src={data.img}
              alt=''
              className='h-[230px] w-[200px] object-cover rounded-md'/>
              <div>
                <h3 className='font-semibold'>{data.title}</h3>
                <p className='text-xs text-gray-500 leading-tight'>{data.description}</p>
                <p className='font-semibold text-sm'>Price: ${data.price}</p>
                <button className='bg-amber-300 px-1 rounded-md text-white cursor-pointer'>Buy Now</button>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard