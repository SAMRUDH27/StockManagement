import React from 'react';
import { ArrowRight, Box, BarChart2, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
            <div className="max-w-xl lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Smart Inventory Management for Modern Business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform your stock management with real-time tracking, automated alerts, and powerful analytics. Perfect for growing businesses managing multiple locations.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                  Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Dashboard preview"
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                />
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
                  <Box className="h-8 w-8 text-indigo-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Real-time Stock Levels</p>
                    <p className="text-sm text-gray-500">Always up to date</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
                  <BarChart2 className="h-8 w-8 text-indigo-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Smart Analytics</p>
                    <p className="text-sm text-gray-500">Data-driven insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}