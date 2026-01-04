import React from 'react';

const Navbar = () => {
    return (
        <nav className="relative z-40 mt-6 w-[90%] max-w-5xl mx-auto">
            <div className="flex items-center justify-between px-2 py-2 pl-6 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold tracking-tight text-white">HE<span className="text-lime-400">FITNESS</span></span>
                </div>

                {/* Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8 text-lg text-zinc-300 font-medium">
                    <a href="#" className="hover:text-lime-400 transition-colors">Home</a>
                    <a href="#membership" className="hover:text-lime-400 transition-colors">Membership</a>
                    <a href="#" className="hover:text-lime-400 transition-colors">Blog</a>
                    <a href="#about" className="hover:text-lime-400 transition-colors">About Us</a>
                    <a href="#classes" className="hover:text-lime-400 transition-colors">Classes</a>
                </div>

                {/* CTA */}
                <button className="bg-lime-400 hover:bg-lime-300 text-zinc-950 px-6 py-3 rounded-full font-semibold text-base transition-all transform active:scale-95">
                    Free Trial
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
