import React from 'react';
import { BarChart2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Cookies
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <BarChart2 className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">StockFlow</span>
          </div>
          <p className="mt-2 text-center text-xs leading-5 text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} StockFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}