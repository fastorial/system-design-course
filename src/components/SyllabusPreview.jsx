import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Unlock } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import content from '../data/content.json';

const SyllabusPreview = () => {
  const [openModule, setOpenModule] = useState(1);
  const { title, subtitle, modules } = content.syllabus;

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="syllabus" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={title}
          subtitle={subtitle}
        />
        
        <div className="max-w-3xl mx-auto">
          {modules.map((module) => (
            <div 
              key={module.id}
              className="mb-4 border border-slate-200 rounded-lg bg-white overflow-hidden"
            >
              <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex items-center">
                  <div className="mr-3 text-blue-600">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Module {module.id}: {module.title}</h3>
                    {module.bonus && (
                      <div className="flex items-center mt-1">
                        <Unlock size={14} className="text-green-600 mr-1" />
                        <span className="text-sm text-green-600 font-medium">{module.bonus}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {openModule === module.id ? (
                    <ChevronUp size={20} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400" />
                  )}
                </div>
              </div>
              
              <div className={`accordion-content ${openModule === module.id ? 'open' : ''}`}>
                <div className="p-4 pt-0 border-t border-slate-100 bg-white">
                  <p className="text-slate-600 mb-3">{module.description}</p>
                  <h4 className="font-medium mb-2 text-slate-700">Topics Covered:</h4>
                  <ul className="space-y-1 mb-4">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  {module.id === 1 && (
                    <Button variant="outline" size="sm">Preview This Module</Button>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">Full curriculum includes 30+ hours of video lessons, exercises, and practical projects.</p>
            <Button size="lg">Join Waitlist for Full Access</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusPreview;