import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { motion } from 'motion/react'
import { fadeIn, textVariant } from '../utility/motion'
import kiwi from '../assets/kiwi.svg'

const Footer = () => {
  const footerLinks = {
    company: [
        { name: 'About', href: 'about' },
        { name: 'Term of Use', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Contact Us', href: '#' },
    ],
    Help: [
        { name: 'Career', href: '#' },
        { name: 'Quick Chat', href: '#' },
    ],
    support: [
        { name: 'FAQ', href: '#' },
        { name: 'Policy', href: '#' },
        { name: 'Business', href: '#' },
    ],
    contact: [
        { name: 'Whatsapp', href: '#' },
        { name: 'Email', href: '#' },
    ],
  }
  
  
    return (
    <motion.footer
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView='show'
    className='bg-gray-50'>
        <div className='section-container'>
            <motion.div
            variants={fadeIn('up', 0.3)}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                {/* brand */}
                <motion.div
                variants={fadeIn('right', 0.4)}
                className='lg:col-span-4'>
                    <motion.div
                    variants={fadeIn('right', 0.5)}
                    className='flex items-center gap-1 mb-6'>
                        <motion.div
                        variants={fadeIn('down', 0.3)}
                        className='mt-2 text-gray-600 text-xl'>
                            <motion.span
                            initial='hidden'
                            whileInView='show'
                            variants={fadeIn('left', 0.4)}
                            className='mr-1 text-teal-500 px-1 py-2'>Marga</motion.span>{''}Smoothies
                            </motion.div>
                        <motion.div className='mx-1.5'>
                            <motion.a
                            whileHover={{scale: 1.1}}
                            href='#'
                            className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors'>
                                <FaFacebook className='w-5 h-5'/>
                            </motion.a>
                             <motion.a
                            whileHover={{scale: 1.1}}
                            href='#'
                            className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors'>
                                <FaTwitter className='w-5 h-5'/>
                            </motion.a>
                             <motion.a
                            whileHover={{scale: 1.1}}
                            href='#'
                            className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors'>
                                <FaInstagram className='w-5 h-5'/>
                            </motion.a>
                        </motion.div>
                        {/* link column */}
                        <motion.div
                        variants={fadeIn('left', 0.4)}
                        className='lg:col-span-8'>
                            <div className='grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-10 ml-4'>
                                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                                    <motion.div
                                    key={category}
                                    variants={fadeIn('up', 0.3 * (categoryIndex + 1))}>
                                        <motion.h3
                                        variants={textVariant(0.2)}
                                        className='text-lg font-medium mb-4'>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </motion.h3>
                                        <motion.ul
                                        variants={fadeIn('up', 0.4)}
                                        className='space-y-3 md:space-y-6'>
                                            {links.map((link, index) => (
                                                <motion.li
                                                key={index}
                                                variants={fadeIn('up', 0.1 * (index + 1))}>
                                                    <motion.a
                                                    whileHover={{x: 5}}
                                                    href={link.href}
                                                    className='text-gray-600 hover:text-gray-900'>
                                                        {link.name}</motion.a>        
                                                </motion.li>
                                            ))}

                                        </motion.ul>
                                    </motion.div>
                                ))}       
                            </div>
                            
                        </motion.div>
                        
                    </motion.div>
                        
                </motion.div>

            </motion.div>

        </div>

    </motion.footer>
  )
}

export default Footer