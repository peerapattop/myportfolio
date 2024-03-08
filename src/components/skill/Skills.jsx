import React from 'react'
import './Skills.css'


const data = [
  {
    id: 1,
    image: "https://img2.pic.in.th/pic/htmlcssjavascript.png",
    title: "HTML , CSS , Javascript",
  },
  {
    id: 2,
    image: 'https://img5.pic.in.th/file/secure-sv1/reacta2559a304fb52013.png',
    title: "React.js",
  },
  {
    id: 3,
    image: 'https://img2.pic.in.th/pic/flutter.png',
    title: "Flutter",
  },
  {
    id: 4,
    image: 'https://img2.pic.in.th/pic/javaaa.png',
    title: "Java",
  },
  {
    id: 5,
    image: 'https://img5.pic.in.th/file/secure-sv1/png-transparent-firebase-hd-logo-1.png',
    title: "Firebase",
  },
  {
    id: 5,
    image: 'https://thaiconfig.com/wp-content/uploads/2023/02/MySQL-Database-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.png',
    title: "MySQL",
  },
];

const Skills = () => {
  return (
    <section className='services container section' id='services'>
      <h2 className='section__title'>Skills</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>  
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills