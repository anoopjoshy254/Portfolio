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
import FadeInSection from './components/FadeInSection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <FadeInSection>
      <Hero />
      </FadeInSection>

      <FadeInSection>
        <Tools />
        </FadeInSection>

        <FadeInSection>
        <Skills />
        </FadeInSection>

      <FadeInSection>
        <Education />
      </FadeInSection>

      <FadeInSection>
        <Projects />
         </FadeInSection>

          <FadeInSection>
        <Experience />
      </FadeInSection>

      <FadeInSection>
        <Achievements />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>
      <Footer />
    </div>
  );
}

export default App;