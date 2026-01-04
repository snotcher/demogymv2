import React from 'react';

const Membership = () => {
    return (
        <section id="membership" className="w-full bg-zinc-950 py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight uppercase leading-none mb-6">
                        Choose Your <span className="text-lime-400">Power</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Unlock your full potential with a specialized plan designed for your fitness journey.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    
                    {/* Basic Plan */}
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-[2rem] p-8 flex flex-col h-full hover:border-zinc-700 transition-all duration-300">
                        <div className="mb-8">
                            <h3 className="text-zinc-400 font-medium text-lg uppercase tracking-wider mb-2">Starter</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">$29</span>
                                <span className="text-zinc-500">/month</span>
                            </div>
                            <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                                Perfect for beginners looking to start their fitness journey with essential access.
                            </p>
                        </div>
                        
                        <div className="flex-grow space-y-4 mb-8">
                            <FeatureItem text="Open Gym Access" />
                            <FeatureItem text="Locker Room Access" />
                            <FeatureItem text="Free Wi-Fi" />
                            <FeatureItem text="1 Guest Pass/Month" dimmed />
                        </div>

                        <button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-colors">
                            Select Starter
                        </button>
                    </div>

                    {/* Premium Plan (Highlighted with Animated Border) */}
                    <div className="relative group rounded-[2rem] p-[2px] h-full transform lg:-translate-y-4">
                        {/* Animated Gradient Border Layer */}
                        <div className="absolute inset-0 rounded-[2rem] animate-border-spin bg-zinc-800"></div>
                        
                        {/* Static Content Layer */}
                        <div className="relative bg-zinc-900/90 backdrop-blur-md rounded-[2rem] p-10 flex flex-col h-full h-full">
                             {/* Badge */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-400 text-zinc-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-20 shadow-lg shadow-lime-400/20">
                                Most Popular
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lime-400 font-medium text-lg uppercase tracking-wider mb-2">Pro Athlete</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-white">$59</span>
                                    <span className="text-zinc-500">/month</span>
                                </div>
                                <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                                    Designed for serious enthusiasts who want full access to all facilities and classes.
                                </p>
                            </div>
                            
                            <div className="flex-grow space-y-4 mb-10">
                                <FeatureItem text="24/7 Gym Access" active />
                                <FeatureItem text="All Group Classes Included" active />
                                <FeatureItem text="Sauna & Spa Access" active />
                                <FeatureItem text="Free Fitness Assessment" active />
                                <FeatureItem text="Unlimited Guest Passes" active />
                            </div>

                            <button className="w-full py-4 rounded-xl bg-lime-400 text-zinc-950 font-bold hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/20">
                                Upgrade to Pro
                            </button>
                        </div>
                    </div>

                    {/* Elite Plan */}
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-[2rem] p-8 flex flex-col h-full hover:border-zinc-700 transition-all duration-300">
                        <div className="mb-8">
                            <h3 className="text-zinc-400 font-medium text-lg uppercase tracking-wider mb-2">Elite</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">$99</span>
                                <span className="text-zinc-500">/month</span>
                            </div>
                            <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                                The ultimate package for total body transformation with personalized guidance.
                            </p>
                        </div>
                        
                        <div className="flex-grow space-y-4 mb-8">
                            <FeatureItem text="All Pro Benefits" />
                            <FeatureItem text="2 Personal Training Sessions" />
                            <FeatureItem text="Nutrition Plan Customization" />
                            <FeatureItem text="Priority Booking" />
                        </div>

                        <button className="w-full py-4 rounded-xl bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors">
                            Go Elite
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ text, active, dimmed }) => (
    <div className={`flex items-center gap-3 ${dimmed ? 'opacity-50' : 'opacity-100'}`}>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${active ? 'bg-lime-400/20 text-lime-400' : 'bg-zinc-800 text-zinc-400'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span className={`text-sm ${active ? 'text-white font-medium' : 'text-zinc-400'}`}>{text}</span>
    </div>
);

export default Membership;
