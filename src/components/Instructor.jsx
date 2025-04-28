import React from 'react';
import { Linkedin, Award, Users, Calendar } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import content from '../data/content.json';

const Instructor = () => {
  const { name, role, linkedIn, image, stats, bio } = content.instructor;

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Meet Your Instructor" 
          subtitle="Learn from an experienced professional with real-world system design expertise"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={image}
                alt={name}
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-bold mr-3">{name}</h3>
                <a 
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              
              <p className="text-lg font-medium text-blue-600 mb-4">{role}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-slate-500 mr-2" />
                  <span>{stats.experience}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-slate-500 mr-2" />
                  <span>{stats.interviews}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-slate-500 mr-2" />
                  <span>{stats.background}</span>
                </div>
              </div>
              
              {bio.map((paragraph, index) => (
                <p key={index} className={`text-slate-700 ${index > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;