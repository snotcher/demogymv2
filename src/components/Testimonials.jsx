import React from 'react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Fitness Enthusiast",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
        content: "Since joining HeFitness, I've seen a massive improvement in my strength and energy levels. The trainers are world-class and the atmosphere is unbeatable."
    },
    {
        name: "David Patel",
        role: "Pro Boxer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
        content: "The boxing program here is intense and authentic. It's the only place in the city that truly captures the discipline of combat sports while pushing you to your limits."
    },
    {
        name: "Emily Carter",
        role: "Marathon Runner",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
        content: "Their high-intensity training transformed my endurance. The equipment is state-of-the-art, and the nutrition plans are a complete game-changer for my performance."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="relative w-full bg-zinc-950 py-24 px-6 md:px-12 overflow-hidden">
            {/* Background Grid & Glow (Inspired by pic) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-lime-500/10 via-transparent to-zinc-950/50 pointer-events-none"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter uppercase leading-none mb-6">
                        What <span className="text-lime-400">Our Members</span> Say
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
                        Discover how HeFitness has helped athletes and fitness enthusiasts redefine their limits and achieve their peak performance.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div 
                            key={idx}
                            className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/60 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/30"
                        >
                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-lime-400"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.53528 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.32614 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33072 21 5.017 21H3.017Z" /></svg>
                            </div>

                            <div className="flex flex-col h-full">
                                {/* Profile Info */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-lime-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                        <img 
                                            src={t.image} 
                                            alt={t.name}
                                            className="relative w-16 h-16 rounded-full object-cover border-2 border-white/10 group-hover:border-lime-400/50 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">{t.name}</h4>
                                        <p className="text-zinc-500 font-medium">{t.role}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <p className="text-zinc-300 leading-relaxed text-lg">
                                    "{t.content}"
                                </p>
                                
                                {/* Bottom Accent Line */}
                                <div className="mt-auto pt-8">
                                    <div className="w-12 h-1 bg-zinc-800 rounded-full group-hover:w-24 group-hover:bg-lime-400 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
