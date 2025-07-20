import type { FC } from 'react';
import { Download, Mail } from 'lucide-react';
import myImage from './myimage.jpeg';

const Hero: FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Hero Text */}
          <div className="w-full text-center mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              I'AM{' '}
              <span className="text-white">
                Anoop K Joshy
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
              Passionate Software Developer
            </h2>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
              >
                <Download size={20} />
                Resume
              </a>
              <button 
                onClick={scrollToContact}
                className="border border-violet-600 text-violet-300 px-8 py-3 rounded-full hover:bg-violet-600/20 hover:text-violet-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full flex justify-center items-center mt-10">
            <div className="relative max-w-[400px] w-full aspect-square flex justify-center items-center group">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <img
                    src={myImage}
                    alt="Anoop K Joshy"
                    className="w-[90%] h-[90%] rounded-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-violet-700/40"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;