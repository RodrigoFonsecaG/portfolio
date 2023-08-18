import { motion } from 'framer-motion'
import React from 'react'

import { fadeIn } from '../animations/variant'
import ParticlesContainer from '../components/ParticlesContainer'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Lorem ipsum dolor <br />{' '}
            <span className="text-accent">sit amet consectetur</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            provident culpa in expedita dicta, modi magnam eaque harum earum.
            Quia?
          </motion.p>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        <ParticlesContainer />

    
      </div>
    </div>
  )
}

export default Home
