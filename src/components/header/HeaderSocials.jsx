import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/akshay-parmar-61683b21a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AP963R" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials