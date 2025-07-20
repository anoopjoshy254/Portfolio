import { useState } from 'react';
import { Code, Server, Wrench, Heart } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('soft');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'soft', label: 'Soft', icon: Heart }
  ];

  const skillsData = {
    frontend: [
      { name: 'HTML', level: 95 },
       { name: 'CSS', level: 95 },
      { name: 'React.js', level: 60 },
      { name: 'javaScript', level: 60 },
       { name: 'kotlin', level: 70 }
     
    ],
    backend: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Python flask', level: 75 },
      { name: 'Springboot', level: 70 },
      { name: 'MongoDB', level: 65 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'Figma', level: 90 },
      { name: 'Photoshop', level: 80 },
      { name: 'Canva', level: 95 }
    ],
    soft: [
      { name: 'Problem-solving', level: 80 },
      { name: 'Collaboration', level: 85 },
      { name: 'Communication', level: 80 },
      { name: 'Time Management', level: 75 },
      { name: 'Attention to Detail', level: 75 },
      { name: 'Leadership', level: 75 }

    ]
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-white text-center mb-16">
          My Skills
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Cards */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 shadow-lg ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-500 shadow-violet-500/25'
                        : 'bg-gray-900/20 border-violet-900/30 text-gray-300 hover:border-violet-600/50 hover:bg-violet-900/20 hover:shadow-violet-500/10'
                    }`}
                  >
                    <IconComponent size={24} />
                    <span className="font-semibold">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:w-2/3">
            <div className="bg-gray-900/20 border border-violet-900/30 rounded-xl p-8 shadow-lg shadow-violet-500/5">
              <h3 className="text-2xl font-bold text-white mb-6 capitalize">
                {categories.find(cat => cat.id === activeCategory)?.label} Skills
              </h3>
              
              <div className="space-y-6">
                {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-sm shadow-violet-500/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;