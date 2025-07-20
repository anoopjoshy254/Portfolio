import Header from './components/Header';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Tools />
      <Skills />
      <Education />
      <Projects />
       <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;