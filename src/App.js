import React from 'react';
import './App.css';
import Portfolio from './about';
import ashImage from './images/ASH.jpg';
import ContactInfo from './contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ashImage} alt="Ash" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
        <h1>RUGADA VENKATESH</h1>
        <p>Web Developer | MERN FullStack</p>
        <div className="signature" style={{ textAlign: "center" }}>Welcome!!!</div>
      </header>
      <nav className="App-nav">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="about" className="App-section">
        <h2>About Me</h2>
        <Portfolio />
      </section>
      <section id="portfolio" className="App-section">
        <h2>Portfolio</h2>
        <a href="https://www.canva.com/design/DAFqgOmo9c8/pLb1fz3UOOWesLN6uZBQtg/view?utm_content=DAFqgOmo9c8&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" target="_blank">Resume</a><br></br>
        <a href="https://www.linkedin.com/in/venkatesh-rugada-629195231/" target="_blank">Visit LinkedIn</a><br></br>
      </section>
      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <ContactInfo />
      </section>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved 🥸</p>
      </footer>
    </div>
  );
}

export default App;
