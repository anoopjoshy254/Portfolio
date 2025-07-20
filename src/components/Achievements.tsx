import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

const achievementsData = [
  {
    title: 'Award for Best Departmental Project',
    event: 'AJCE Mastermind',
    location: 'Amal Jyothi College of Engineering, Kanjirappally',
    period: '2025',
    details: [
      'Led a team to develop an IoT-based feeding system and won the best departmental project award.'
    ]
  },
   {
    title: 'Top 10 leading Ideas',
    event: 'Nasa Space apps – 2025,Kanjirapally',
    location: 'Amal Jyothi College of Engineering, Kanjirappally',
    period: '2025',
    details: [
      'Led a team to develop a video which shows the importance of space exploration and won a place in the top 10 ideas among 150+ teams.'
    ]
  },
  // Add more achievement objects as needed
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-white text-center mb-16">
          Achievements
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievementsData.map((ach, index) => (
                <div
                  key={index}
                  className="bg-gray-900/20 border border-violet-900/30 rounded-xl p-8 hover:border-violet-600/50 hover:bg-violet-900/20 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <Award className="text-violet-400" />
                    <span className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-600/30 text-violet-300 px-4 py-1 rounded-full text-sm font-medium">
                      {ach.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{ach.title}</h3>
                  <p className="text-gray-400 font-medium mb-2">{ach.event}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin size={16} />
                      <span>{ach.location}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {ach.details.map((detail, idx) => (
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

export default Achievements;
