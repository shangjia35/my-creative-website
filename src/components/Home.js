import React, { useState, useEffect } from 'react';
import './Home.css'
import {motion} from "framer-motion"

function Home() {
  // const [scrollY, setScrollY] = useState(0);
  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          entry.target.classList.toggle("show", entry.isIntersecting)
        })
      },
      {
        threshold: 0.5
      }
    
    );

    hiddenElements.forEach((el) => observer.observe(el));
  });
  
  

  
  
  
  

  // var windowHeight = window.innerHeight;
  // document.querySelector('.title').style.height = (windowHeight - 80) + 'px'

  // useEffect(() => {

  // }, [])

  // const handleScroll = () => setScrollY(window.scrollY);
  // window.addEventListener("scroll", handleScroll);

  return (
    <div 
      className='home' 
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      // transition={{delay: 0.1}}
    >
      <div className='title'>
        <motion.h1
          // style={{ top: `${scrollY}px` }}
          initial={{y: -100}}
          animate={{y: 0, color: '#ff2994'}}
          transition={{type: 'spring', stiffness: 120}}
        >
          Hello, I am Shangjia Xu.
        </motion.h1>
      </div>

      <div>
        <img className='about-img' src='/my-creative-website/images/img2.jpeg' alt='zoo'></img>
      </div>
      <div className='content'>
        <p className='hidden'>
          I am a senior in Computer Science at Purdue University and also an incoming graduate student at Carnegie Mellon University.
        </p>
      </div>
      
    </div>
  );
}

export default Home;
