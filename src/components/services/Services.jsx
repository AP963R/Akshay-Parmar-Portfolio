import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Some creative interaction with this field as I have designed the three projects available to view.</p>
            </li>   
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>HTML</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>CSS</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>JavaScript</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>React</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Node JS</p>
            </li>   
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>5+ years experience with Canva & Canva Pro.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>10+ years experience with Logic Pro X to cater for audio production.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>iMovie to create mp4s and other visuals for websites.</p>
            </li>  
          </ul>
        </article>

      </div>
    </section>
)
}

export default Services