import React from 'react'
import Card from './Card'
import './Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>Check out my Projects!</h1>
      <div className='projects-container'>
        <div className='projects-wrapper'>
            <ul className='projects-items'>
                <Card 
                    src='/images/img1.jpeg' 
                    text='Chatbot Tweets Analyzer'
                    label='Python, NLP'
                    path='/projects'
                />
                <Card 
                    src='/images/img1.jpeg' 
                    text='Personal Website'
                    label='HTML, CSS, JavaScript'
                    path='/projects'
                />
                <Card 
                    src='/images/img1.jpeg' 
                    text='Unix Shell'
                    label='C/C++, Lex/Yacc, Agile'
                    path='/projects'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
