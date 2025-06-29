import React from 'react';
import Header from './components/Header';
import ProfessionalLinks from './components/ProfessionalLinks';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProfessionalLinks />
      <About />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
