import React from 'react';
import './Home.css'
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div 
      className='home' 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      // exit={{opacity: 0}}
      // transition={{delay: 0.1}}
    >
      <motion.h2
        initial={{y: -100}}
        animate={{y: 0, color: '#ff2994'}}
        transition={{type: 'spring', stiffness: 120}}
      >
        Hello, I am Shangjia Xu.
      </motion.h2>
      
    </motion.div>
  );
}

export default Home;
