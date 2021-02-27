import './styling/App.scss';
import About from './Components/About';
import ContactBar from './Components/ContactBar';
import Header from './Components/Header';
import Landing from './Components/Landing';
import SkillsExperience from './Components/SkillsExperience';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';


function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <ContactBar />
      <Landing />
      <button onClick={() => console.log(scrollPosition)}> Scroll Position</button>
      <About />
      <SkillsExperience />
      <Footer />
    </div>
  );
}

export default App;
