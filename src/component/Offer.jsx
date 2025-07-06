import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'motion/react'
import { fadeIn, textVariant } from '../utility/motion'
const Offer = () => {
  return (
    <section id='offer' className='section-container px-4 md:px-0'>
        <motion.div className='bg-teal-400 rounded-2xl overflow-hidden'
        variant={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show">
            <div className='relative md:px-16 px-6 py-16 md:py-24'></div>
            {/* gradient */}
             <motion.div
             variants={fadeIn('left', 0.4)}></motion.div>
             {/* content */}
             <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12'>
                <motion.div
                variants={fadeIn('right', 0.5)}
                className='text-white max-w-lg text-center md:text-left'>
                    <motion.h2
                    variants={textVariant(0.3)}
                    className='text-2xl sm:text-3xl md:text-4xl font-medium mb-4'>
                        Get our limited offer
                    </motion.h2>
                    <motion.p variants={textVariant(0.3)} className='text-blue-100 text-sm sm:text-base'>
                         You can get our best smoothies at the best prices.
                    </motion.p>
                </motion.div>

                {/* email form */}
                <motion.div
                variants={fadeIn('left, 0.5')}
                className='w-full md:w-auto'>
                    <motion.div variants={fadeIn('up', 0.6)}
                    className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                        <motion.input
                        variants={fadeIn('right', 0.7)}
                        type='email'
                        placeholder='Enter your email address'
                        className='w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none '></motion.input>
                    </motion.div>
                </motion.div>
             </div>

        </motion.div>
    </section>
  )
}

export default Offer