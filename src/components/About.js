import React from 'react'
import {motion} from 'framer-motion'
import './About.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsEnvelopeFill} from 'react-icons/bs'

function About() {
  return (
    <motion.div 
      className='about'
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      // transition={{delay: 0.1}}
    >
      
      <motion.div 
        className='about-img__container'
        initial={{x: -250}}
        animate={{x: 0}}
        transition={{type: 'spring', stiffness: 120}}
      >
        <img className='about-img' src='/my-creative-website/images/img2.jpeg' alt='zoo'></img>
      
        <div className='about-socials'>
          <a href="https://www.linkedin.com/in/shangjiaxu35/"><BsLinkedin></BsLinkedin></a>
          <a href="http://github.com/shangjia35"><BsGithub /></a>
          <a href='mailto:xsj827@gmail.com'><BsEnvelopeFill /></a>
        </div>
      </motion.div>


      <motion.div 
        className='about-content__container'
        initial={{x: 250}}
        animate={{x: 0}}
        transition={{type: 'spring', stiffness: 120}}
      >
        <p>
          I am a junior in Computer Science at Purdue University with minors in Mathematics and Music History & Theory. 
          My concentration is machine intelligence.
          I am also an undergraduate data science researcher at Purdue University.
        </p>
      </motion.div>
      
    </motion.div>
  )
}

export default About
