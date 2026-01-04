import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Marquee from './Marquee';

const Hero = () => {
    const cardsRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const cards = document.querySelectorAll('.reveal-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden">
            
            {/* Background Image & Gradient Overlays */}
            <div className="absolute inset-0 z-0">
                {/* Replaced placeholder with local image */}
                <img 
                    src="/Boxer in Action_upscaled_2x.jpg" 
                    alt="Gym Background" 
                    className="w-full h-full object-cover opacity-40 grayscale contrast-125" 
                    fetchpriority="high"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/20 to-zinc-950"></div>
                
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            </div>

            {/* Marquee - Placed at top visually based on strict reading of HTML flow if we assume it's pre-navbar */}
            <Marquee />

            {/* Navbar (Floating Pill) */}
            <Navbar />

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col lg:flex-row lg:justify-between lg:py-0 w-full max-w-7xl z-20 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative items-center justify-center">

                {/* Left Side: Social Proof / Stats Card */}
                <div className="lg:w-1/4 flex lg:flex-col order-2 lg:order-1 lg:mb-0 w-full mb-8 gap-x-6 gap-y-6 items-start justify-center">
                    <div className="group hover:border-lime-500/30 transition-all duration-500 bg-zinc-900/60 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="flex -space-x-3 overflow-hidden">
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100" alt="" width="40" height="40" loading="eager" />
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" alt="" width="40" height="40" loading="eager" />
                                <div className="h-10 w-10 rounded-full ring-2 ring-zinc-900 bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">+2k</div>
                            </div>
                            <div className="">
                                <p className="text-2xl font-semibold text-white leading-none tracking-tight">51,984</p>
                                <p className="text-sm text-zinc-400">Happy Members</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex text-lime-400 text-sm">
                                <iconify-icon icon="solar:star-bold" className=""></iconify-icon>
                                <iconify-icon icon="solar:star-bold"></iconify-icon>
                                <iconify-icon icon="solar:star-bold"></iconify-icon>
                                <iconify-icon icon="solar:star-bold"></iconify-icon>
                                <iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
                            </div>
                            <p className="text-lg font-medium text-white">4.9/5 <span className="text-zinc-500 text-base font-normal">Rating</span></p>
                        </div>
                    </div>
                </div>

                {/* Center/Bottom CTA Text Block (Responsive) */}
                <div className="flex flex-col items-center gap-6 order-1 lg:order-2 mb-12 lg:mb-0 text-center z-30 lg:mt-24">
                    <h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 leading-tight">
                        REDEFINE <span className="text-lime-400">YOUR STRENGTH</span>
                    </h1>
                    <p className="text-xl text-zinc-300 max-w-md mx-auto leading-relaxed">
                        Experience state-of-the-art equipment and world-class trainers tailored to your goals.
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4 mt-2">
                        {/* Main Button */}
                        <button className="bg-lime-400 hover:bg-lime-300 text-zinc-950 px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg tracking-tight transition-all shadow-[0_0_20px_-5px_rgba(163,230,53,0.5)] whitespace-nowrap">
                            Start Membership
                        </button>
                        {/* Secondary Button */}
                        <button className="group bg-zinc-900/50 hover:bg-zinc-800 backdrop-blur-md border border-white/10 text-white px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-sm sm:text-lg tracking-tight transition-all flex items-center gap-2 whitespace-nowrap">
                            View Programs
                            <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                        </button>
                    </div>
                </div>

                {/* Right Side: Feature Cards */}
                <div ref={cardsRef} className="lg:w-1/4 w-full flex flex-col gap-5 order-3 items-end">
                    
                    {/* Feature 1 */}
                    <div className="reveal-card lg:!opacity-100 lg:!transform-none group flex gap-4 hover:bg-zinc-800/60 transition-colors cursor-pointer bg-zinc-900/40 w-full max-w-xs border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md gap-x-4 gap-y-4 items-center">
                        <div className="h-14 w-14 rounded-xl bg-zinc-800 flex items-center justify-center text-lime-400 border border-white/5">
                            <iconify-icon icon="solar:dumbbell-large-linear" width="28" stroke-width="1.5" className=""></iconify-icon>
                        </div>
                        <div className="">
                            <h3 className="text-lg font-medium text-white">Personal Training</h3>
                            <p className="text-base text-zinc-400">Expert guidance</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="reveal-card lg:!opacity-100 lg:!transform-none group w-full max-w-xs backdrop-blur-md bg-zinc-900/40 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-zinc-800/60 transition-colors cursor-pointer lg:-ml-8">
                        <div className="h-14 w-14 rounded-xl bg-zinc-800 flex items-center justify-center text-lime-400 border border-white/5">
                            {/* Replaced Iconify icon with raw SVG to ensure rendering */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75-.69 4.12-1.99l.14-.13C17.7 17.5 20 15.02 20 11.95c0-2.19-1.63-3.96-3.71-4.38-2.61-.52-4.29 1.48-4.29 1.48s-1.68-2-4.29-1.48C5.63 7.99 4 9.76 4 11.95c0 3.06 2.29 5.54 5.74 6.87l.14.13c1.37 1.3 2.62 1.99 4.12 1.99z"/><path d="M12 2v6"/><path d="m15 5-3 3"/></svg>
                        </div>
                        <div className="">
                            <h3 className="text-lg font-medium text-white">Nutrition Plans</h3>
                            <p className="text-base text-zinc-400">Dietary consultation</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="reveal-card lg:!opacity-100 lg:!transform-none group w-full max-w-xs backdrop-blur-md bg-zinc-900/40 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-zinc-800/60 transition-colors cursor-pointer">
                        <div className="h-14 w-14 rounded-xl bg-zinc-800 flex items-center justify-center text-lime-400 border border-white/5">
                            <iconify-icon icon="solar:treadmill-round-linear" width="28" stroke-width="1.5"></iconify-icon>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white">Modern Equipment</h3>
                            <p className="text-base text-zinc-400">Premium machines</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Huge Background Text Anchor */}
            <div className="relative w-full z-10 select-none pointer-events-none mt-auto">
                {/* Fade Overlay */}
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-zinc-950 to-transparent z-20"></div>
                <h1 className="text-[10vw] leading-none font-bold text-center text-white/5 tracking-tighter mix-blend-overlay">
                    YOU ARE YOUR ONLY LIMIT
                </h1>
            </div>

        </main>
    );
};

export default Hero;
