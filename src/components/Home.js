import React from 'react';
import './Home.css'
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div 
      className='home' 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      Hello, I am Shangjia Xu.
    </motion.div>
  );
}

export default Home;
