// App.tsx
import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <HeroSection />
      <FeaturesGrid />
      <ContactForm />
    </div>
  );
};

export default App;
