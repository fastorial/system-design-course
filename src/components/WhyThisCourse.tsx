import React from 'react';
import { Target, Monitor, RefreshCw, Code, FileCheck, Clock, Zap } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const features = [
  {
    title: 'Interview-Ready System Designs',
    description: 'Learn exactly what tech companies look for in system design interviews, with real examples.',
    icon: Target
  },
  {
    title: 'High-Quality Diagrams and Visuals',
    description: 'Visualize complex systems with professionally crafted diagrams that clarify concepts.',
    icon: Monitor
  },
  {
    title: 'Always Up-to-date Content',
    description: 'The tech world evolves rapidly, and so does our content. Stay current with the latest approaches.',
    icon: RefreshCw
  },
  {
    title: 'Design 9 Real-World Systems',
    description: 'Build practical systems like Netflix, Twitter, Uber and more from the ground up.',
    icon: Code
  },
  {
    title: 'Free Cheatsheets & Templates',
    description: 'Get downloadable resources to reference during interviews and when building systems.',
    icon: FileCheck
  },
  {
    title: 'Lifetime Access and Updates',
    description: 'Buy once, benefit forever. Receive all future updates at no extra cost.',
    icon: Clock
  },
  {
    title: 'Fast, Practical Learning — No Fluff',
    description: 'Concise, focused content that respects your time and delivers maximum value.',
    icon: Zap
  }
];

const WhyThisCourse = () => {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Why You'll Love This Course" 
          subtitle="We've built this course to be practical, comprehensive, and directly applicable to both interviews and real-world engineering."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg hover:shadow-lg transition-shadow border border-slate-100 hover:border-blue-100"
            >
              <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisCourse;