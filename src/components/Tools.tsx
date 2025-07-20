import * as React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  
  FaReact,
  FaGithub,
  FaJsSquare,
} from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiFigma,
  SiCanva,
  SiPython,
  SiKotlin,
  SiMongodb,
  SiMysql
} from 'react-icons/si';

const Tools: React.FC = () => {
  const tools = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'PHOTOSHOP', icon: <SiAdobephotoshop className="text-blue-300" /> },
    { name: 'FIGMA', icon: <SiFigma className="text-pink-500" /> },
    { name: 'CANVA', icon: <SiCanva className="text-blue-400" /> },

    { name: 'PYTHON', icon: <SiPython className="text-yellow-300" /> },
    { name: 'KOTLIN', icon: <SiKotlin className="text-orange-400" /> },
    { name: 'MONGODB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'REACT.JS', icon: <FaReact className="text-cyan-300" /> },
    { name: 'GITHUB', icon: <FaGithub className="text-white" /> },
    { name: 'JAVASCRIPT', icon: <FaJsSquare className="text-yellow-400" /> }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-white text-center mb-16">
          Tools Known
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`group bg-gray-900/20 border border-violet-900/30 rounded-lg p-6 text-center hover:border-violet-600/50 hover:bg-violet-900/20 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 animate-fade-in-up delay-[${index * 100}ms]`}
            >
              <div className="text-5xl mb-3 mx-auto flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-gray-300 font-medium text-sm tracking-wide group-hover:text-violet-300 transition-colors duration-300">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
