import React from 'react';

const AboutUs = () => {
    return (
        <section id="about" className="relative w-full bg-zinc-950 py-24 px-6 md:px-12 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-lime-400/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-square md:aspect-video lg:aspect-square">
                            <img 
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" 
                                alt="Modern Gym Interior" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="800"
                            />
                            {/* Experience Badge */}
                            <div className="absolute bottom-6 left-6 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                                <p className="text-4xl font-bold text-lime-400">10+</p>
                                <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Years of Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-8">
                            <h3 className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h3>
                            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter uppercase leading-none mb-8">
                                Building <span className="text-lime-400 italic">Elite</span> Athletes Since 2014
                            </h2>
                        </div>

                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed mb-10">
                            <p>
                                HeFitness wasn't just built to be another gym; it was forged as a sanctuary for those who refuse to settle for mediocrity. Starting as a small basement boxing club, we've evolved into the city's premier destination for high-performance training.
                            </p>
                            <p>
                                Our mission is simple: to provide the state-of-the-art tools, world-class coaching, and relentless environment needed to unlock the absolute peak version of yourself. Whether you're a pro athlete or stepping onto the turf for the first time, you belong here.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">50+</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">Certified Trainers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">2,500+</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">Active Members</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">15k sqft</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">Premium Facility</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">24/7</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">Member Access</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
