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
            <Route path='/' exact Component={Home}></Route>
            <Route path='/projects' exact Component={Projects}></Route>
            <Route path='/experience' exact Component={Experience}></Route>
            <Route path='/about' exact Component={About}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
