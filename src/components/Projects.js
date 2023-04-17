import React from 'react'
import Card from './Card'
import './Projects.css'
import {motion} from "framer-motion"

function Projects() {
  return (
    <motion.div 
      className='projects'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      // exit={{opacity: 0}}
      // transition={{delay: 0.1}}
    >
      <motion.h1
        initial={{x: -1000}}
        animate={{x: 0}}
        transition={{type: 'spring', stiffness: 120}}
      >
        Check out my Projects!
      </motion.h1>
      <div className='projects-container'>
        <motion.div 
          className='projects-wrapper'
          initial={{y: -1000}}
          animate={{y: 0}}
          transition={{delay: 1, type: 'spring', stiffness: 100}}
        >
            <ul className='projects-items'>
                <Card 
                    src='/my-creative-website/images/img1.jpeg' 
                    text='Chatbot Tweets Analyzer'
                    label='Python, NLP'
                    path='/projects'
                />
                <Card 
                    src='/my-creative-website/images/img1.jpeg' 
                    text='Personal Website'
                    label='HTML, CSS, JavaScript'
                    path='/projects'
                />
                <Card 
                    src='/my-creative-website/images/img1.jpeg' 
                    text='Unix Shell'
                    label='C/C++, Lex/Yacc, Agile'
                    path='/projects'
                />
            </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects
