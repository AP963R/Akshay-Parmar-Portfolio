import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            
          </div>
          <h3 className='portfolio-title'>SCNE® Records</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/AP963R/scnerecords.github.io" className='btn' target="_blank">GitHub</a>
          <a href="https://ap963r.github.io/scnerecords.github.io/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            
          </div>
          <h3 className='portfolio-title'>GraduateAtDriving::</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/AP963R/graduateatdriving.github.io" className='btn' target="_blank">GitHub</a>
          <a href="https://ap963r.github.io/graduateatdriving.github.io/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            
          </div>
          <h3 className='portfolio-title'>Slap It For Retail</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/AP963R/slapitforretail.github.io" className='btn' target="_blank">GitHub</a>
          <a href="https://ap963r.github.io/slapitforretail.github.io/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio