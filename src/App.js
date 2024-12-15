import React from 'react'
import NavBar from './components/NavBar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/skills.js'
import Works from './components/Works/works.js'
import Contact from './components/Contact/contact.js'
import Footer from './components/Footer/footer.js'


const App = () => {
  return (
    <div className='App'>
        <NavBar/>
        <Intro/>
        <Skills/>
        <Works/> 
        <Contact/>

        <Footer/>
    </div>
  )
}

export default App