import { useState } from 'react';
import { Eye, ExternalLink, Github } from 'lucide-react';
import driveOnImg from './DRIVE ON.png';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web Design', 'Applications', 'Web Development'];
  
  const projects = [
    {
      title: 'FEEDO',
      category: 'Applications',
      image: 'https://t4.ftcdn.net/jpg/10/26/22/19/360_F_1026221950_01X5phuCzhN94Dh3XjByZkVzJDtLba1E.jpg',
      description: 'An Automatic fish feeding system with web interface',
      tags: ['Kotlin', 'Mongodb', 'Python flask']
    },
    {
      title: 'Messaging App',
      category: 'Web Development',
      image: 'https://img.freepik.com/free-vector/messenger-app-mobile-flat-style_23-2147784021.jpg?semt=ais_hybrid&w=740',
      description: 'A messaging app for real-time communication',
      tags: ['react.js', 'SQL', 'Java Springboot']
    },
    {
      title: 'Drive On',
      category: 'Web Design',
      image: driveOnImg,
      description: 'Modern website design',
      tags: ['Figma', 'UI/UX', 'Design System']
    },
    {
      title: 'Automatic Violence Detection system',
      category: 'Web Development',
      image: 'https://t3.ftcdn.net/jpg/01/45/53/22/360_F_145532242_TxuWfWagXmTWx2nW3qvN6GFfPybVbdDv.jpg',
      description: 'An automatic violence detection system with web interface using machine learning',
      tags: ['Pytorch', 'React', 'On progress']
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-white text-center mb-16">
          My Projects
        </h2>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 shadow-lg ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-500 shadow-violet-500/25'
                  : 'border-violet-900/30 text-gray-400 hover:border-violet-600/50 hover:text-violet-300 hover:shadow-violet-500/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/20 border border-violet-900/30 rounded-xl overflow-hidden hover:border-violet-600/50 hover:bg-violet-900/20 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button className="p-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full hover:from-violet-700 hover:to-purple-700 transition-colors shadow-lg shadow-violet-500/25">
                      <Eye size={20} className="text-white" />
                    </button>
                    <button className="p-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full hover:from-violet-700 hover:to-purple-700 transition-colors shadow-lg shadow-violet-500/25">
                      <ExternalLink size={20} className="text-white" />
                    </button>
                    <button className="p-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full hover:from-violet-700 hover:to-purple-700 transition-colors shadow-lg shadow-violet-500/25">
                      <Github size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.category}</p>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-violet-900/30 border border-violet-700/30 text-violet-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;