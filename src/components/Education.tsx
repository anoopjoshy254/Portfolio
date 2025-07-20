import React from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

import { useState } from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree",
      field: "Computer Science Engineering",
      institution: "Amal jyothi College of Engineering",
      location: "Kerala, India",
      period: "September 2022 - Present",
      status: "Ongoing",
      details: ["Software Development", "Data Structures", "Web development", "Database Management"]
    },
    {
      degree: "Higher Secondary",
      field: "Science Stream",
      institution: "SNDP HSS Cheneerkara",
      location: "Kerala, India",
      period: "June 2020 - March 2022",
      status: "98%",
      details: ["Mathematics", "Physics", "Chemistry", "Biology"]
    },
    {
      degree: "Secondary",
      field: "ICSE",
      institution: "SDA HSS Pathanamthitta",
      location: "Kerala, India",
      period: "June 2010 - March 2020",
      status: "91%",
      details: ["Mathematics", "Physics", "Chemistry", "Biology"]
    }
  ];

  const [current, setCurrent] = useState(0);
  const visibleCards = 2;
  const maxIndex = educationData.length - visibleCards;
  const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-white text-center mb-16">
          Education
        </h2>
        <div className="flex items-center justify-center gap-4">
          <button
            className="text-gray-400 hover:text-white transition-colors disabled:opacity-40"
            onClick={handlePrev}
            disabled={current === 0}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="overflow-hidden w-full max-w-4xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 50}%)` }}
            >
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="min-w-1/2 w-1/2 md:w-1/2 flex-shrink-0 px-4 bg-gray-900/20 border border-violet-900/30 rounded-xl p-8 mx-2 hover:border-violet-600/50 hover:bg-violet-900/20 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
                  style={{ maxWidth: '50%' }}
                >
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-600/30 text-violet-300 px-4 py-1 rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-400 font-medium mb-2">{edu.field}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin size={16} />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-white font-medium">
                      {edu.status}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {edu.details.map((detail, idx) => (
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
          <button
            className="text-gray-400 hover:text-white transition-colors disabled:opacity-40"
            onClick={handleNext}
            disabled={current === maxIndex}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Education;