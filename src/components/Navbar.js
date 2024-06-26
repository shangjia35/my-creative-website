import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
            
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                Shangjia Xu
            </Link>
            

            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                        Experience
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
            </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navbar;
