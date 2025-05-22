"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  title: string;
  content: string;
  author: string;
  location: string;
  date: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Breathtaking Views and Luxury Comfort!",
    content: "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, impeccably clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
    author: "Sofia B.",
    location: "France",
    date: "23.10.2024",
    rating: 5
  },
  {
    id: 2,
    title: "Exceptional Stay with Excellent Amenities",
    content: "The Executive Suite provides an exceptional experience. The room was spotless, equipped with everything you could need. The marble bathroom with its beautiful Pure luxury. The location is perfect for exploring the city, and the staff truly make you feel welcome.",
    author: "Youssef R.",
    location: "Morocco",
    date: "20.10.2024",
    rating: 5
  },
  {
    id: 3,
    title: "Outstanding Service and Perfect Location",
    content: "From the moment I arrived, the service was impeccable. The Executive Suite was beautifully appointed with stunning city views. The attention to detail in every aspect of my stay was remarkable. I'll definitely be returning!",
    author: "Emma L.",
    location: "United Kingdom",
    date: "18.10.2024",
    rating: 5
  },
  {
    id: 4,
    title: "Luxury Redefined - Amazing Experience",
    content: "This hotel has redefined luxury for me. The Executive Suite was absolutely perfect - spacious, elegant, and equipped with everything needed for a comfortable stay. The staff went above and beyond to ensure my experience was memorable.",
    author: "Marco T.",
    location: "Italy",
    date: "15.10.2024",
    rating: 5
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - 2) : prevIndex - 2
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };


  return (
    <div className="container mx-auto p-6 bg-white">
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-900 mr-8">What Our Guests Say</h2>
          
          
          <div className="flex items-center space-x-2 mt-5">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className={`w-4 h-4 ${currentIndex === 0 ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>

            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
              disabled={currentIndex + 2 >= testimonials.length}
            >
              <ChevronRight className={`w-4 h-4 ${currentIndex + 2 >= testimonials.length ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>
        
        <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
          See All
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      
      <div className="relative overflow-hidden">
        
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / 2) * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-md"
                  >
                    
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                      &quot;{testimonial.title}&quot;
                    </h3>

                   
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {testimonial.content}
                    </p>

                  
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                   
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-900 font-medium">
                        — {testimonial.author}, {testimonial.location}
                      </span>
                      <span className="text-gray-500">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                ))}
                
                
                {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).length === 1 && (
                  <div className="hidden md:block"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 2)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / 2) === index
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default TestimonialsSlider;