import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    title: 'Full Stack Developer Intern',
    company: 'InfoSpica Solutions',
    location: 'Technopark Phase 3, Trivandrum, Kerala',
    period: 'June 2025 – July 2025',
    details: [
      'Built an E-commerce website using React and CSS.',
      'Collaborated with backend team using Java Springboot.',
      'SQL database management and optimization.'
    ]
  },
   {
    title: 'Design Head',
    company: 'Makerhub IEDC AJCE',
    location: 'Amal Jyothi College of Engineering, Kanjirappally',
    period: 'July 2025 – present',
    details: [
      'designing and developing innovative solutions for various projects.',
      'photoshop and Figma for UI/UX design.',
      'Poster design and branding for college events.'
    ]
  },
  {
    title: 'Content Creator',
    company: 'Incial',
    location: 'TBI Startup Valley, Kanjirappally',
    period: 'May 2025 – present',
    details: [
      'Creating engaging content for social media platforms.',
      'Collaborating with marketing team to enhance brand visibility.',
    ]
  },
  // Add more experience objects as needed
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-white text-center mb-16">
          Experience
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-900/20 border border-violet-900/30 rounded-xl p-8 hover:border-violet-600/50 hover:bg-violet-900/20 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <Briefcase className="text-violet-400" />
                    <span className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-600/30 text-violet-300 px-4 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {exp.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
