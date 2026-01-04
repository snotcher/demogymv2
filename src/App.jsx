import React from 'react';
import './styles/fonts.css';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Partners from './components/Partners';
import TrainingPrograms from './components/TrainingPrograms';
import Classes from './components/Classes';
import Testimonials from './components/Testimonials';
import Membership from './components/Membership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 antialiased selection:bg-lime-400 selection:text-zinc-950 overflow-x-hidden font-inter">
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Partners />
      <TrainingPrograms />
      <Classes />
      <Testimonials />
      <Membership />
      <Footer />
    </div>
  );
}

export default App;
