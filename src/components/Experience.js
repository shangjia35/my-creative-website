import React from 'react'
import {motion} from 'framer-motion'

function Experience() {
  return (
    <motion.div 
      className='experience'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{delay: 0.1}}>
      experience
    </motion.div>
  )
}

export default Experience
