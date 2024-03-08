import React from 'react'
import './Home.css'
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
        <img src={Me} className='home__img'/>
        <h1 className='home__name'>Pirapat Tangpanyawai</h1>
        <span className='home__education'>I'am a Front-End Developer</span>

        <HeaderSocials/>

        <a href='#contact' className='btn'>Hire Me</a>

        <ScrollDown/>

        <Shapes/>
      </div>
    </section>
  )
}

export default Home