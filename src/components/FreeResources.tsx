import React from 'react';
import { FileText, Map, HelpCircle, Play, FileTerminal, LayoutTemplate } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const resources = [
  {
    id: 1,
    title: 'System Design Cheatsheet',
    description: 'A comprehensive PDF covering all key system design concepts and patterns',
    icon: FileText,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Beginner-to-Advanced Roadmap',
    description: 'Step-by-step guide to mastering system design, from fundamentals to expert topics',
    icon: Map,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    title: '30+ Real Interview Questions',
    description: 'Actual system design questions asked at top tech companies with solution approaches',
    icon: HelpCircle,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    title: 'Free Preview Lessons',
    description: 'Get access to selected video lessons from the course to experience the teaching style',
    icon: Play,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    id: 5,
    title: 'Mindmaps for Faster Revision',
    description: 'Visual study guides to help you remember key concepts before interviews',
    icon: FileTerminal,
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    id: 6,
    title: 'Templates for Designing Systems',
    description: 'Ready-to-use templates for diagramming and documenting your system designs',
    icon: LayoutTemplate,
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  }
];

const FreeResources = () => {
  return (
    <section id="bonuses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Instant Free Bonuses When You Join the Waitlist" 
          subtitle="Get immediate value while waiting for the full course to launch"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className="border border-slate-200 rounded-lg p-6 group hover:shadow-lg transition-all duration-300 hover:border-blue-200"
            >
              <div className={`${resource.bgColor} p-3 rounded-lg inline-block mb-4`}>
                <resource.icon className={`h-6 w-6 ${resource.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-slate-600 mb-4">{resource.description}</p>
              <div className="text-blue-600 text-sm font-medium group-hover:underline">Yours free with waitlist signup</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-slate-800 mb-6">
            Get all these resources <span className="text-blue-600 font-semibold">instantly</span> when you join the waitlist today!
          </p>
          <Button size="lg">Join Waitlist Now</Button>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;