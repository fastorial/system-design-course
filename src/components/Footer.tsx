import React from 'react';
import { Code2, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Code2 className="h-8 w-8 text-blue-400 mr-2" />
            <span className="font-bold text-xl">SystemDesignPro</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-3">About SystemDesignPro</h3>
            <p className="text-slate-300">
              We help software engineers master system design for both interviews and real-world engineering. 
              Join thousands of engineers who have advanced their careers through our comprehensive courses.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white">Home</a></li>
                <li><a href="#syllabus" className="text-slate-300 hover:text-white">Syllabus</a></li>
                <li><a href="#bonuses" className="text-slate-300 hover:text-white">Free Resources</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-white">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white">Blog</a></li>
                <li><a href="#faqs" className="text-slate-300 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">Support</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-lg mb-3">Contact</h3>
              <p className="text-slate-300 mb-2">
                Have questions about the course?
              </p>
              <a href="mailto:info@systemdesignpro.com" className="text-blue-400 hover:text-blue-300">
                info@systemdesignpro.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} SystemDesignPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;