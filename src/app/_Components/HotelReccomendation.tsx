"use client";

import React, { useState } from 'react';
import { Star, Bed, Bath, Maximize, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Hotel {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Sofitel Algiers Hamma Garden",
    description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
    price: 699,
    rating: 4.5,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/recommendation.jpg"
  },
  {
    id: 2,
    name: "Sofitel Algiers Hamma Garden",
    description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
    price: 699,
    rating: 4.5,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/recommendation.jpg"
  },
  {
    id: 3,
    name: "Sofitel Algiers Hamma Garden",
    description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
    price: 699,
    rating: 4.5,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/recommendation.jpg"
  },
  {
    id: 4,
    name: "Sofitel Algiers Hamma Garden",
    description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
    price: 699,
    rating: 4.5,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/recommendation.jpg"
  },
  {
    id: 5,
    name: "Sofitel Algiers Hamma Garden",
    description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
    price: 699,
    rating: 4.5,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/recommendation.jpg"
  },
  {
    id: 6,
    name: "Sofitel Algiers Hamma Garden",
    description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
    price: 699,
    rating: 4.5,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/recommendation.jpg"
  }
];

const HotelRecommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= hotels.length ? 0 : prevIndex + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, hotels.length - itemsPerView) : prevIndex - itemsPerView
    );
  };

  


  return (
    <div className="container mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">You may also like</h2>

        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className={`w-5 h-5 ${currentIndex === 0 ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
            disabled={currentIndex + itemsPerView >= hotels.length}
          >
            <ChevronRight className={`w-5 h-5 ${currentIndex + itemsPerView >= hotels.length ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(hotels.length / itemsPerView) }, (_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {hotels.slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView).map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        width={400}
                        height={192}
                        className="w-full h-48 object-cover"
                        style={{ objectFit: 'cover' }}
                        priority={slideIndex === 0}
                      />
          
                      <div className="absolute bottom-3 left-3 text-white px-2 py-1 rounded flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{hotel.rating}</span>
                      </div>
                    </div>

                    
                    <div className="p-4">
                     
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">
                        {hotel.name}
                      </h3>

                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {hotel.description}
                      </p>

                      
                      <div className="mb-4">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold text-gray-900">{hotel.price}</span>
                          <span className="text-sm text-gray-500">Per Night</span>
                        </div>
                      </div>

                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Bed className="w-4 h-4" />
                          <span>{hotel.bedrooms} Bedroom</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath className="w-4 h-4" />
                          <span>{hotel.bathrooms} Bathroom</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Maximize className="w-4 h-4" />
                          <span>{hotel.area} sq ft.</span>
                        </div>
                      </div>

                      
                      <div className="flex space-x-10">
                        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-full transition-colors duration-200">
                          Book Now
                        </button>
                        <button className="w-10 h-10 border border-gray-300 hover:border-blue-200 hover:text-blue-600 rounded-full flex items-center justify-center transition-colors duration-200">
                          <Info className="w-4 h-4 text-blue-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(hotels.length / itemsPerView) }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerView) === index
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelRecommendations;