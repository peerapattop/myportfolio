import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.linkedin.com/in/pirapattop/" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/peerapattop" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://www.facebook.com/peerapattopten/" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="tel:092-098-7484" className="home__social-link" target='_blank'>
        <i class="fa-solid fa-phone"></i>
        </a>

    </div>
  )
}

export default HeaderSocials