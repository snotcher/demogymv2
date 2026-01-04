import React, { Suspense, lazy } from 'react';
import './styles/fonts.css';
import Hero from './components/Hero';

// Lazy load sections below the fold
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Partners = lazy(() => import('./components/Partners'));
const TrainingPrograms = lazy(() => import('./components/TrainingPrograms'));
const Classes = lazy(() => import('./components/Classes'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Membership = lazy(() => import('./components/Membership'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 antialiased selection:bg-lime-400 selection:text-zinc-950 overflow-x-hidden font-inter">
      <Hero />
      <Suspense fallback={<div className="h-screen bg-zinc-950 flex items-center justify-center text-lime-400 font-bold uppercase tracking-widest animate-pulse">Loading...</div>}>
        <WhyChooseUs />
        <AboutUs />
        <Partners />
        <TrainingPrograms />
        <Classes />
        <Testimonials />
        <Membership />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
