// import React from 'react'
import { Toaster } from 'react-hot-toast';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  )
}

export default App;