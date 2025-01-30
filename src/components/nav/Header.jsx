import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link, useLocation } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'
import { FaHome } from 'react-icons/fa'

const Header = () => {
  const [menuIsOpen, openMenu] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen)
    document.body.classList.toggle('no-scroll')
  }

  return (
    <>
      <div id='topnav'>
        <div id='logo'>
          {location.pathname === '/contact' ? (
            <Link to="/">
              <FaHome size={30} />
            </Link>
          ) : (
            <Link to="/contact">
              Get In Touch
            </Link>
          )}
        </div>

        {/* Desktop Menu */}
        <ul id='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Hamburger icon */}
        <div id='menu-container'>
          <button id='menu-button' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <List id='hamburger-icon'/>
          </button>
        </div>
      </div>

      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
    </>
  )
}

export default Header
