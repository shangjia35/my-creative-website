import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
  const location = useLocation()  

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/my-creative-website' exact Component={Home}></Route>
            <Route path='/my-creative-website/projects' exact Component={Projects}></Route>
            <Route path='/my-creative-website/experience' exact Component={Experience}></Route>
            <Route path='/my-creative-website/about' exact Component={About}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
