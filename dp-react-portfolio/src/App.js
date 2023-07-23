import React, { useState } from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer"; 

function App() {
  // State to track the currently selected section
  const [currentSection, setCurrentSection] = useState('About Me');

  // Handler function for updating the current section when a navigation title is clicked
  const handleNavClick = (title) => {
    setCurrentSection(title);
  };

  return (
    <div className="App">
      {/* Header */}
      <Navbar currentSection={currentSection} handleNavClick={handleNavClick} />

      {/* Main Content */}
      <main>
        {/* Use conditional rendering to show the appropriate content section based on the currentSection state */}
        {currentSection === 'About Me' && <About />}
        {currentSection === 'Portfolio' && <Projects />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Footer' && <Footer />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
