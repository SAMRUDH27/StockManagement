import React from 'react';
import { BarChart2, Box, Truck, Clock, PieChart, Smartphone, Users, AlertTriangle } from 'lucide-react';

const features = [
  {
    name: 'Real-time Inventory Tracking',
    description: 'Monitor stock levels across all locations with live updates and automated alerts.',
    icon: Box
  },
  {
    name: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive reporting and insights.',
    icon: BarChart2
  },
  {
    name: 'Supplier Management',
    description: 'Streamline ordering and maintain healthy relationships with vendors.',
    icon: Truck
  },
  {
    name: 'Automated Alerts',
    description: 'Get notified about low stock, upcoming expiration dates, and more.',
    icon: AlertTriangle
  },
  {
    name: 'Mobile Access',
    description: 'Manage your inventory on-the-go with our powerful mobile app.',
    icon: Smartphone
  },
  {
    name: 'Multi-location Support',
    description: 'Easily manage multiple warehouses and retail locations from one platform.',
    icon: Users
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Modern Inventory Management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Say goodbye to spreadsheets and manual tracking. Our platform provides everything you need to manage your inventory efficiently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}