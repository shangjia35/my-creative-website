import React from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About';
import {Routes, Route, useLocation} from 'react-router-dom';


function AnimatedRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' exact Component={Home}></Route>
            <Route path='/projects' exact Component={Projects}></Route>
            <Route path='/experience' exact Component={Experience}></Route>
            <Route path='/about' exact Component={About}></Route>
        </Routes>
    </div>
  )
}

export default AnimatedRoutes
