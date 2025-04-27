import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const faqs = [
  {
    id: 1,
    question: `What if I'm a beginner in system design?`,
    answer: 'This course is designed for all levels, from beginners to advanced engineers. We start with fundamentals and gradually build up to complex concepts. The modular structure allows you to learn at your own pace and revisit topics as needed.'
  },
  {
    id: 2,
    question: 'Will this course help me for FAANG interviews?',
    answer: 'Absolutely! The course includes actual interview questions from top tech companies including FAANG. We cover the exact methodologies and frameworks that interviewers look for, with a focus on clear communication and proper analysis of requirements and tradeoffs.'
  },
  {
    id: 3,
    question: 'When will the course launch?',
    answer: 'The course is scheduled to launch in Q3 2025. By joining the waitlist now, you"ll get early access, special pricing, and immediate access to the free resources mentioned above.'
  },
  {
    id: 4,
    question: 'How much will the course cost?',
    answer: `The regular price will be $299, but waitlist members will receive a special early-bird discount. We're committed to providing exceptional value, which is why the course includes lifetime updates at no additional cost.`
  },
  {
    id: 5,
    question: 'Will I get a certificate?',
    answer: `Yes, upon completion of the course, you will receive a certificate that you can add to your LinkedIn profile and resume. However, the real value is in the knowledge and skills you'll gain, which will translate directly to interview success and on-the-job performance.`
  },
  {
    id: 6,
    question: 'How is this different from free YouTube tutorials?',
    answer: 'While free resources can be helpful, they often lack structure, depth, and real-world context. This course provides a systematic approach, professional-quality diagrams, comprehensive explanations of tradeoffs, and practical exercises that reinforce your learning—all from an experienced engineer who has both built large-scale systems and conducted hundreds of technical interviews.'
  }
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Get answers to common questions about the System Design Mastery Course"
        />
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="mb-4 border border-slate-200 rounded-lg bg-white overflow-hidden"
            >
              <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <div>
                  {openFAQ === faq.id ? (
                    <ChevronUp size={20} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400" />
                  )}
                </div>
              </div>
              
              {openFAQ === faq.id && (
                <div className="p-4 pt-0 border-t border-slate-100">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;