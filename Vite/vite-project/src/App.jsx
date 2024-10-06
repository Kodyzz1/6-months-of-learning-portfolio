import { useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <h1>My Portfolio</h1>
      <nav className="nav">
        <ul>
          <li key="about"><a href="#about" onClick={() => setCurrentSection('about')}>About Me</a></li>
          <li key="projects"><a href="#projects" onClick={() => setCurrentSection('projects')}>Projects</a></li>
          <li key="contact"><a href="#contact" onClick={() => setCurrentSection('contact')}>Contact</a></li>
        </ul>
      </nav>
      <main>
        {renderSection()}
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
