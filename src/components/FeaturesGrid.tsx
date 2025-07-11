// FeaturesGrid.tsx
import React from 'react';

const FeaturesGrid: React.FC = () => {
  const features = [
    { title: 'Funktion 1', description: 'Beskrivelse af funktion 1' },
    { title: 'Funktion 2', description: 'Beskrivelse af funktion 2' },
    { title: 'Funktion 3', description: 'Beskrivelse af funktion 3' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Vores Funktioner</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
