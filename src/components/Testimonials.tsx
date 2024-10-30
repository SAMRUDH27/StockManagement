import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "StockFlow has completely transformed how we manage our inventory. The real-time tracking and automated alerts have saved us countless hours and prevented stockouts.",
    author: "Sarah Chen",
    role: "Operations Manager",
    company: "Urban Retail Co.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The analytics and reporting features have given us insights we never had before. We've reduced our inventory costs by 23% in just three months.",
    author: "Michael Rodriguez",
    role: "Supply Chain Director",
    company: "Global Foods Inc.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Managing multiple warehouses used to be a nightmare. With StockFlow, we can see everything in one place and make better decisions faster.",
    author: "Emma Thompson",
    role: "Warehouse Manager",
    company: "Logistics Plus",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our customers are saying about their experience with StockFlow
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
                <div>
                  <div className="flex gap-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
                </div>
                <div className="mt-6 border-t border-gray-900/5 pt-6">
                  <div className="flex items-center gap-x-4">
                    <img src={testimonial.image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                      <div className="text-sm leading-6 text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}