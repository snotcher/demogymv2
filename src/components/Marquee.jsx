import React from 'react';

const Marquee = () => {
    return (
        <div className="relative w-full bg-lime-400 py-3 overflow-hidden z-20 border-y border-lime-500">
            <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">A PERSONALIZED PROGRAM</span>
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">GET STRONGER</span>
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">HEALTHIER</span>
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">HAPPIER</span>
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">JOIN US NOW</span>
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">A PERSONALIZED PROGRAM</span>
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">GET STRONGER</span>
                 {/* Duplicate for seamless loop */}
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">HEALTHIER</span>
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">HAPPIER</span>
                <span className="text-zinc-950 font-bold text-xl">+</span>
                <span className="text-zinc-950 font-bold text-xl tracking-tight uppercase">JOIN US NOW</span>
            </div>
        </div>
    );
};

export default Marquee;
