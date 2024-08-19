import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className="about__container grid">
        <img src='https://img2.pic.in.th/pic/E5452.jpg' alt=""  className='about__img'/>
        
        <div className='about__data'>
          <div className="about__info">
            <p className="about__description">&nbsp;&nbsp;&nbsp;My name is Pirapat Tangpanyawai. My nickname is Top. I am 22 years old. I live in Bangkok. Now I'm fresh graduate at King Mongkut's University of Technology North Bangkok in 2024. 
                 <br/>&nbsp;&nbsp;&nbsp;&nbsp;I have 4 months of internship experience as a Web Developer, focusing on Frontend development using React.js, TypeScript, and Tailwind CSS, including API integration. In the future, I hope I will be a good programmer.</p>
            <a href="https://drive.google.com/file/d/12AiEFDTSQR1_DAzMto7q3VsJvkl44t2U/view?usp=sharing" className="btn">Check Resume</a>
            <div></div>
            <a href="https://drive.google.com/file/d/1zbkJoq2K2He42GBCEjvVl60PhtMpnfyH/view?usp=sharing" className="btn">Check Transcript</a>          
          </div>
        </div>
      </div>
    </section>
  )
}

export default About