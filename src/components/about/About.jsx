import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className="about__container grid">
        <img src='https://img2.pic.in.th/pic/6503052422116.jpeg' alt=""  className='about__img'/>
        
        <div className='about__data grid'>
          <div className="about__info">
            <p className="about__description">I am a student at the Department of Computer Electronic Technology, King Mongkut's University of Technology North Bangkok.</p>
            <a href="" className="btn">Download Resume</a>
            <a href="" className="btn">Download Transcript</a>          
          </div>

          <div className='about__skills grid'>
              <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Mobile Developer</h3>
                  <span className='skills__number'>1 Years</span>
                </div>
                <div className="skills__bar">
                  <span className='skills__percentage'></span>
                </div>
              </div>

              <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Web Developer</h3>
                  <span className='skills__number'>1 Years</span>
                </div>
                <div className="skills__bar">
                  <span className='skills__percentage'></span>
                </div>
              </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About