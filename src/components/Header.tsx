import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FadeInSection from "./FadeInSection"; // ✅ relative path

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-violet-900/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <div className="text-2xl font-bold text-white">
            
            ANOOP<span className="text-violet-400"></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-violet-300 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-violet-300 transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-300 hover:text-violet-300 transition-colors duration-300"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="text-gray-300 hover:text-violet-300 transition-colors duration-300"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-violet-300 transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-violet-300 transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg shadow-violet-500/25"
            >
              Hire Me
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-violet-900/30">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-violet-300 transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-violet-300 transition-colors duration-300 text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-300 hover:text-violet-300 transition-colors duration-300 text-left"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-gray-300 hover:text-violet-300 transition-colors duration-300 text-left"
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-violet-300 transition-colors duration-300 text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-violet-300 transition-colors duration-300 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 font-medium text-center shadow-lg shadow-violet-500/25"
              >
                Hire Me
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;