import React from 'react';
import { Linkedin, Award, Users, Calendar } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Instructor = () => {
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
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Anu Shibin Joseph Raj" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-bold mr-3">Anu Shibin Joseph Raj</h3>
                <a 
                  href="https://www.linkedin.com/in/anushibinj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              
              <p className="text-lg font-medium text-blue-600 mb-4">Lead Software Engineer</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-slate-500 mr-2" />
                  <span>8+ years experience</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-slate-500 mr-2" />
                  <span>Interviewed 500+ candidates</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-slate-500 mr-2" />
                  <span>Ex-FAANG engineer</span>
                </div>
              </div>
              
              <p className="text-slate-700">
                I'm passionate about demystifying system design for engineers at all levels. 
                After conducting hundreds of technical interviews and building large-scale systems myself, 
                I've distilled what actually matters both for interviews and real-world engineering.
              </p>
              
              <p className="mt-4 text-slate-700">
                My teaching approach focuses on practical knowledge that you can apply immediately—no 
                unnecessary theory or complicated jargon. Just clear, actionable insights from someone 
                who's been on both sides of the interview table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;