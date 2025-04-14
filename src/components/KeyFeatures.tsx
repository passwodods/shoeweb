import React from 'react';

// Simple SVG Icons
const FeatherIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
);
const BoltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

// Removed props, state, useEffect, Framer Motion imports
const KeyFeatures: React.FC = () => {
    const features = [
        { icon: <FeatherIcon />, title: "Lightweight Comfort", description: "Engineered mesh upper provides breathable support." },
        { icon: <BoltIcon />, title: "Responsive Cushioning", description: "Advanced foam midsole delivers energy return." },
        { icon: <ShieldIcon />, title: "Durable Traction", description: "High-abrasion rubber outsole ensures grip." },
    ];

    return (
        // Removed relative positioning and background elements
        <div className="w-full max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Why You'll Love It</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {features.map((feature, index) => (
                    // Restored original card styling
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                        {feature.icon}
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFeatures;