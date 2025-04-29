import React from 'react';
import { Target, Monitor, RefreshCw, Code, FileCheck, Clock, Zap } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import content from '../data/content.json';

const iconMap = {
  Target,
  Monitor,
  RefreshCw,
  Code,
  FileCheck,
  Clock,
  Zap
};

const WhyThisCourse = () => {
  const { title, subtitle, features, bgColor } = content.whyThisCourse;

  return (
    <section id="why" className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={title} 
          subtitle={subtitle}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index} 
                className="p-6 rounded-lg hover:shadow-lg transition-shadow border border-slate-100 hover:border-blue-100"
              >
                <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyThisCourse;