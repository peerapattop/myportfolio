import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skill/Skills';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <Sidebar/>
    <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Contact/>
    </main>
    </>
  )
}

export default App;
