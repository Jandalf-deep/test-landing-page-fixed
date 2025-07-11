// HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">Velkommen til vores hjemmeside!</h1>
      <p className="text-lg md:text-xl">Oplev de bedste funktioner og tjenester.</p>
    </section>
  );
};

export default HeroSection;
