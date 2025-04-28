import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import content from '../data/content.json';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqs = content.faqs;

  const toggleFAQ = (id) => {
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