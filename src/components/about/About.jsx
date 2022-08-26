import React from 'react'
import './about.css'
import ME from '../../assets/About__Me__Pic.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image"/>
            </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>5+ months</small>
              </article>
          
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>3+</small>
              </article>
          
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>3 completed</small>
              </article>
            </div>
            
            <p>
            I'm a self-taught frontend developer with 5-6 months experience. In that time I have been fortunate enough to work on three commercial projects. As someone who is very creative and a logical problem-solver, taking the leap at the end of March 2022 and putting my efforts into learning as much as I could about Frontend Development whilst working a part-time job has been tricky at times, yet very rewarding! It was certainly the best decision I have made in a while as my previous role as a Recruitment Consultant was not the right fit for me although I am grateful for all of the opportunities that have come my way so far.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About