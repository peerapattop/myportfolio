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
            <p className="about__description">&nbsp;&nbsp;&nbsp;My name is Pirapat Tangpanyawai. My nickname is Top. I am 22 years old. I live in Bangkok. Now I'm a student at King Mongkut's University of Technology North Bangkok. 
                 <br/>&nbsp;&nbsp;&nbsp;&nbsp; In the future, I hope I will be a good programmer. After graduating bachelor's degree, I plan to be a
              professional programmer in Web Developer and Mobile Developer.</p>
            <a href="https://drive.google.com/file/d/1e1ASwGs-NP_jKdyJ9Wth8OtNDTAhnZvK/view?usp=sharing" className="btn">Check Resume</a>
            <a href="https://drive.google.com/file/d/1QB8VQXP-nPbJPlaRrIylySWO5O_kifwb/view?usp=sharing" className="btn">Check Transcript</a>          
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