import React from 'react';
import { Star } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Senior Software Engineer',
    content: 'This course explains system design like no other — simple, practical, and interview-focused! I received multiple offers after applying what I learned.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Backend Developer',
    content: 'Finally, a course that connects theory to real-world system building! I used the techniques from module 4 in my recent work project and got praise from my tech lead.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Michael Torres',
    role: 'Full Stack Engineer',
    content: 'The diagrams and visual explanations made complex topics easy to understand. Before this course, I would panic when asked about system design in interviews.',
    rating: 4,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What Students Are Saying" 
          subtitle="Hear from engineers who have already benefited from our system design resources"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-slate-700 mb-4">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;