import React, { useState } from 'react'
import './Navbar.css'
import edup from '../../assets/edup.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const NAV_LINKS = [
  { to: 'Hero', label: 'Home', offset: 0 },
  { to: 'program', label: 'Program', offset: -70 },
  { to: 'about', label: 'About us', offset: -70 },
  { to: 'campus', label: 'Campus', offset: -70 },
  { to: 'testimonials', label: 'Testimonials', offset: -70 },
]

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav className="container dark-nav">
      <Link to="Hero" smooth duration={500} className="logo-link">
        <img src={edup} alt="Edumind home" className="logo" />
      </Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth
              offset={link.offset}
              duration={500}
              onClick={() => setMobileMenu(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="contact"
            smooth
            offset={-70}
            duration={500}
            className="btn"
            onClick={() => setMobileMenu(false)}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        aria-label="Toggle navigation menu"
        className="menu-icon"
        onClick={() => setMobileMenu((m) => !m)}
      />
    </nav>
  )
}

export default Navbar
