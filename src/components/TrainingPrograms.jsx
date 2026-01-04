import React from 'react';

const TrainingPrograms = () => {
    return (
        <section className="overflow-hidden z-20 bg-zinc-950 w-full border-white/5 border-t pt-24 pb-24 relative">
            <div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter uppercase leading-none">
                        Training Programs
                    </h2>
                </div>

                {/* Cards Grid / Horizontal Scroll on Mobile */}
                <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible no-scrollbar gap-5 pb-8 lg:pb-0">
                    
                    {/* Card 1: Highlighted (Strength) */}
                    <div className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 lg:w-auto lg:h-auto bg-lime-400 rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 flex flex-col justify-between lg:min-h-[420px] group hover:-translate-y-2 transition-transform duration-500">
                        <div className="">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 text-zinc-950 mb-6 lg:mb-10 flex items-center justify-center">
                                {/* Dumbbell Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7.9-7.9a2.1 2.1 0 1 1 3 3L6 13a2.1 2.1 0 1 1-3-3Z"></path><path d="m14 11 7.9-7.9a2.1 2.1 0 1 1 3 3L17 14a2.1 2.1 0 1 1-3-3Z"></path></svg>
                            </div>
                            <h3 className="text-xl lg:text-3xl font-semibold text-zinc-950 uppercase leading-none tracking-tight mb-3 lg:mb-6">
                                Strength & Conditioning
                            </h3>
                            <p className="text-zinc-800 text-sm lg:text-lg font-medium leading-relaxed line-clamp-2 lg:line-clamp-none">
                                Comprehensive resistance training designed to build muscle mass.
                            </p>
                        </div>
                        <a href="#" className="flex items-center gap-3 text-zinc-950 font-semibold mt-4 lg:mt-10 text-base lg:text-xl group-hover:gap-4 transition-all uppercase">
                            Explore
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hidden lg:block"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                        </a>
                    </div>

                    {/* Card 2: Dark (Combat) */}
                    <div className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 lg:w-auto lg:h-auto bg-zinc-900 border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 flex flex-col justify-between lg:min-h-[420px] group hover:border-zinc-700 transition-all duration-300">
                        <div className="">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 text-white mb-6 lg:mb-10 flex items-center justify-center">
                                {/* Swords Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 17.5 3 6V3h3l11.5 11.5"></path><path d="m13 19 6-6"></path><path d="M16 16 21 21"></path><path d="M19 21 21 19"></path></svg>
                            </div>
                            <h3 className="text-xl lg:text-3xl font-semibold text-white uppercase leading-none tracking-tight mb-3 lg:mb-6">
                                Boxing & Combat
                            </h3>
                            <p className="text-zinc-400 text-sm lg:text-lg leading-relaxed line-clamp-2 lg:line-clamp-none">
                                Master self-defense while getting a full-body cardio workout.
                            </p>
                        </div>
                        <a href="#" className="flex items-center gap-3 text-white font-medium mt-4 lg:mt-10 text-base lg:text-xl group-hover:gap-4 transition-all uppercase">
                            Explore
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hidden lg:block"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                        </a>
                    </div>

                     {/* Card 3: Dark (Crossfit) */}
                    <div className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 lg:w-auto lg:h-auto bg-zinc-900 border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 flex flex-col justify-between lg:min-h-[420px] group hover:border-zinc-700 transition-all duration-300">
                        <div className="">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 text-white mb-6 lg:mb-10 flex items-center justify-center">
                                {/* Flame Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                            </div>
                            <h3 className="text-xl lg:text-3xl font-semibold text-white uppercase leading-none tracking-tight mb-3 lg:mb-6">
                                Crossfit & Intensity
                            </h3>
                            <p className="text-zinc-400 text-sm lg:text-lg leading-relaxed line-clamp-2 lg:line-clamp-none">
                                Push your endurance limits with high-intensity movements.
                            </p>
                        </div>
                        <a href="#" className="flex items-center gap-3 text-white font-medium mt-4 lg:mt-10 text-base lg:text-xl group-hover:gap-4 transition-all uppercase">
                            Explore
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hidden lg:block"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                        </a>
                    </div>

                </div>



                {/* Bottom Headline */}
                <div className="mt-32 mb-8">
                    <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter uppercase">
                        Find Your <span className="text-zinc-500">Perfect Fit</span>
                    </h2>
                </div>
            </div>
        </section>
    );
};
export default TrainingPrograms;
