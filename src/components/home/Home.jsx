import React from 'react'
import './Home.css'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
        <img src='https://img2.pic.in.th/pic/1707410239098.jpeg' className='home__img' alt='mypicture'/>
        <h1 className='home__name'>Pirapat Tangpanyawai</h1>
        <span className='home__education'>I'am a Front-End Developer and Mobile Developer</span>

        <HeaderSocials/>

        <a href='#contact' className='btn'>Contact Me</a>

        <ScrollDown/>

        <Shapes/>
      </div>
    </section>
  )
}

export default Home