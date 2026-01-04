import React from 'react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-zinc-950 pt-32 pb-12 px-6 md:px-12 overflow-hidden border-t border-white/5">
            {/* Massive Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
                <span className="text-[35vw] md:text-[25vw] font-anton leading-none text-white/5 uppercase select-none tracking-tighter">
                    POWER
                </span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                {/* Motivational Text */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
                        WE ARE WAITING FOR YOU, <span className="text-lime-400">ATHLETE</span>
                    </h2>
                    <div className="w-24 h-1 bg-lime-400 mx-auto rounded-full"></div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-20 w-full max-w-md">
                    <button className="flex-1 py-5 rounded-2xl bg-lime-400 text-zinc-950 font-bold text-lg hover:bg-lime-300 transition-all shadow-[0_0_30px_-5px_rgba(163,230,53,0.4)] uppercase">
                        Join Us Now
                    </button>
                    <button className="flex-1 py-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 uppercase">
                        <iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon>
                        WhatsApp
                    </button>
                </div>

                {/* Footer Bottom */}
                <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo/Brand */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                            <span className="text-zinc-950 font-black text-xl italic">H</span>
                        </div>
                        <span className="text-2xl font-black italic tracking-tighter text-white uppercase">HeFitness</span>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-8 text-zinc-500 font-medium whitespace-nowrap overflow-x-auto">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <SocialLink icon="ri:instagram-line" />
                        <SocialLink icon="ri:facebook-fill" />
                        <SocialLink icon="ri:mail-line" />
                    </div>
                </div>

                <div className="mt-12 text-zinc-600 text-sm">
                    © 2024 HeFitness Gym. Built for the Elite.
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon }) => (
    <a href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/50 hover:bg-lime-400/5 transition-all text-2xl">
        <iconify-icon icon={icon}></iconify-icon>
    </a>
);

export default Footer;
