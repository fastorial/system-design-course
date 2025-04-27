import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Unlock } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const modules = [
  {
    id: 1,
    title: 'Introduction to System Design',
    description: 'Learn the fundamentals of system design and why it matters for both interviews and real engineering.',
    topics: [
      'What is System Design?',
      'The System Design Interview Process',
      'Core Design Principles',
      'Approaching Design Problems Methodically'
    ],
    bonus: 'Free Preview Available!'
  },
  {
    id: 2,
    title: 'Core Concepts and Terminology',
    description: 'Master the essential vocabulary and concepts that form the foundation of all system design.',
    topics: [
      'Scalability: Horizontal vs. Vertical',
      'Load Balancing Strategies',
      'Caching Mechanisms',
      'Database Choices: SQL vs. NoSQL'
    ],
    bonus: 'Cheatsheet Download!'
  },
  {
    id: 3,
    title: 'System Design Fundamentals',
    description: 'Dive deep into the building blocks that make up modern distributed systems.',
    topics: [
      'Consistency vs. Availability (CAP Theorem)',
      'Replication and Partitioning',
      'Proxies and Load Balancers',
      'Message Queues and Event-Driven Design'
    ],
    bonus: 'Mindmaps Available!'
  },
  {
    id: 4,
    title: 'Design Scenarios',
    description: 'Apply your knowledge to real-world design problems and common interview questions.',
    topics: [
      'Designing a URL Shortener',
      'Building a Video Streaming Service',
      'Creating a Social Network Feed',
      'Implementing a Distributed Cache'
    ],
    bonus: 'Sample Lessons Free!'
  },
  {
    id: 5, 
    title: 'Advanced Topics & Real-World Tradeoffs',
    description: 'Explore complex considerations that separate junior from senior system designers.',
    topics: [
      'System Monitoring and Alerting',
      'Handling Failures Gracefully',
      'Cost Optimization Strategies',
      'Performance vs. Reliability Tradeoffs'
    ],
    bonus: 'Free Templates!'
  },
  {
    id: 6,
    title: 'Interview & Real-World Readiness',
    description: 'Prepare specifically for interview success while building practical skills for on-the-job challenges.',
    topics: [
      'Interview Communication Strategies',
      'Handling Ambiguous Requirements',
      'Drawing Clear, Effective Diagrams',
      'Future-Proofing Your Designs'
    ],
    bonus: 'Bonus Tips & Tricks!'
  }
];

const SyllabusPreview = () => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="syllabus" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Course Syllabus Preview" 
          subtitle="Comprehensive curriculum designed to take you from fundamentals to advanced system design mastery"
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