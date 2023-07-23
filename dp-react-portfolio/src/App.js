import React, { useState } from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume"; 
import Footer from "./components/Footer"; 

// Import your custom components here (Header, AboutMe, Portfolio, Contact, Resume, Footer)

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
      {/* Use my custom Header component here, passing the currentSection state and handleNavClick function as props */}

      {/* Main Content */}
      <main>
        {/* Use conditional rendering to show the appropriate content section based on the currentSection state */}
        {/* Use your custom components (AboutMe, Portfolio, Contact, Resume) here */}
        {/* Pass appropriate props to each section if needed */}
      </main>

      {/* Footer */}
      {/* Use my custom Footer component here */}
    </div>
  );
}

export default App;
