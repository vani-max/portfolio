import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from "./components/Education/Education"
function App(){
    return (
        <div className="bg-[#171d32] h-auto w-full overflow-hidden">
            <Navbar />
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Education/>
            <Footer/>
        </div>
    )

}

export default App;