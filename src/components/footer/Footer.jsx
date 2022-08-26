import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Akshay Parmar's Portfolio</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/akshay-parmar-61683b21a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AP963R" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Akshay Parmar Portfolio. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer