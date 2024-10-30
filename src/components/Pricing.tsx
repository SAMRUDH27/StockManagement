import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 49,
    description: 'Perfect for small businesses just getting started.',
    features: [
      'Up to 1,000 SKUs',
      'Single location',
      'Basic reporting',
      'Email support',
      'Mobile app access',
      'Real-time tracking'
    ]
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses with multiple locations.',
    features: [
      'Up to 10,000 SKUs',
      'Up to 5 locations',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom alerts',
      'Supplier management',
      'Batch operations'
    ]
  },
  {
    name: 'Enterprise',
    price: 249,
    description: 'For large businesses with complex needs.',
    features: [
      'Unlimited SKUs',
      'Unlimited locations',
      'Custom reporting',
      '24/7 phone support',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      'Training sessions'
    ]
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl transition duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}