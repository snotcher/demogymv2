import React, { useState } from 'react';

const cards = [
    {
        icon: "solar:dumbbell-large-linear",
        title: "Excellent Training Fitness & Gym",
        description: "No matter what your starting point is, you can join us as soon as you have decided that you want level.",
        highlight: true
    },
    {
        icon: "solar:shield-star-linear",
        title: "Full-Body, Boxing Inspired",
        description: "Boxing is a high-intensity cardio workout based on boxing techniques using gloves.",
        highlight: false
    },
    {
        icon: "solar:bottle-linear",
        title: "New York City's Original Crossfit",
        description: "A full body, high-intensity workout which will leave you feeling amazing every time.",
        highlight: false
    }
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative w-full bg-zinc-950 py-24 px-6 md:px-12 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight uppercase leading-none">Why Choose Us</h2>
            
            {/* Navigation Controls - Hidden on Desktop */}
            <div className="flex items-center gap-4 lg:hidden">
                <button 
                    onClick={prevSlide}
                    className="h-16 w-16 rounded-full border border-zinc-800 text-white flex items-center justify-center hover:bg-zinc-900 transition-colors group focus:outline-none"
                    aria-label="Previous slide"
                >
                    <iconify-icon icon="solar:arrow-left-linear" width="28" stroke-width="1.5" className="group-hover:-translate-x-1 transition-transform"></iconify-icon>
                </button>
                <button 
                    onClick={nextSlide}
                    className="h-16 w-16 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:bg-zinc-200 transition-colors group focus:outline-none"
                    aria-label="Next slide"
                >
                    <iconify-icon icon="solar:arrow-right-linear" width="28" stroke-width="1.5" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                </button>
            </div>
        </div>

        {/* Cards Grid / Slider Container */}
        <div className="relative w-full overflow-hidden lg:overflow-visible px-2 lg:px-0">
            <div 
                className="flex lg:grid lg:grid-cols-3 lg:gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)`, width: '100%' }}
            >
                {cards.map((card, idx) => (
                    <div 
                        key={idx}
                        className={`min-w-full lg:min-w-0 px-4 lg:px-0 flex flex-col`}
                    >
                        <div className={`h-full ${
                            card.highlight 
                            ? 'bg-lime-400 text-zinc-950' 
                            : 'bg-zinc-900 border border-zinc-800 text-white'
                        } rounded-[2.5rem] p-10 flex flex-col justify-between min-h-96 group lg:hover:-translate-y-2 transition-all duration-500`}>
                            <div>
                                <div className={`h-14 w-14 mb-10 flex items-center justify-center ${card.highlight ? 'text-zinc-950' : 'text-white'}`}>
                                    <iconify-icon icon={card.icon} width="56" stroke-width="1.5"></iconify-icon>
                                </div>
                                <h3 className="text-3xl font-semibold uppercase leading-none tracking-tight mb-6">{card.title}</h3>
                                <p className={`${card.highlight ? 'text-zinc-800' : 'text-zinc-400'} text-lg font-medium leading-relaxed`}>
                                    {card.description}
                                </p>
                            </div>
                            <a href="#" className={`flex items-center gap-3 font-semibold mt-10 text-xl group-hover:gap-4 transition-all ${card.highlight ? 'text-zinc-950' : 'text-white'}`}>
                                Learn More
                                <iconify-icon icon="solar:arrow-right-up-linear" width="24" stroke-width="1.5"></iconify-icon>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Pagination Indicators - Hidden on Desktop */}
        <div className="flex justify-center gap-3 mt-16 lg:hidden">
            {cards.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-16 h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                        activeIndex === idx ? 'bg-lime-400 w-24' : 'bg-zinc-800'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>

        {/* Bottom Headline */}
        <div className="mt-32 mb-8">
            <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter uppercase">A Wide Range Of</h2>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
