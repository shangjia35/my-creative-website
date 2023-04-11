import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card(props) {
  return (
    <>
      <li className='card'>
        <Link className='card-link' to={props.path}>
            <figure className='card-pic-wrap' data-catogory={props.label}>
                <img className='card-img' alt='Project Image' src={props.src}/>
            </figure>
            <div className='card-info'>
                <h5 className='card-text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default Card
