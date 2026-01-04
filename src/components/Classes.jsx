import React from 'react';

const Classes = () => {
    const classData = [
        {
            title: "HIIT Intensity",
            time: "08:00 AM - 09:00 AM",
            trainer: "Marcus Chen",
            category: "Cardio",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Pro Boxing",
            time: "10:30 AM - 11:30 AM",
            trainer: "Sarah Jenkins",
            category: "Combat",
            image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Zen Yoga",
            time: "05:00 PM - 06:00 PM",
            trainer: "Elena Rodriguez",
            category: "Flexibility",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Power Lifting",
            time: "07:30 PM - 08:30 PM",
            trainer: "David 'Tank' Reed",
            category: "Strength",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section id="classes" className="relative w-full bg-zinc-950 py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h3 className="text-lime-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Daily Schedule</h3>
                        <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter uppercase leading-none">
                            Upcoming <span className="text-zinc-500">Classes</span>
                        </h2>
                    </div>
                    <p className="text-zinc-400 text-lg max-w-sm">
                        Join our expert-led group sessions designed to push your limits and build community.
                    </p>
                </div>

                {/* Class Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {classData.map((item, index) => (
                        <div key={index} className="group relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 hover:border-lime-400/50 transition-all duration-500 flex flex-col h-[400px]">
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="400"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 mt-auto flex flex-col h-full justify-end">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-wider rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-lime-400 transition-colors">
                                    {item.title}
                                </h3>
                                
                                <div className="flex flex-col gap-1 mb-6 text-zinc-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <iconify-icon icon="solar:clock-circle-linear" className="text-lime-400"></iconify-icon>
                                        {item.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <iconify-icon icon="solar:user-linear" className="text-lime-400"></iconify-icon>
                                        Trainer: {item.trainer}
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-white/5 hover:bg-lime-400 hover:text-zinc-950 border border-white/10 hover:border-lime-400 rounded-xl font-bold text-white transition-all backdrop-blur-md uppercase tracking-wider text-sm">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 flex justify-center">
                    <button className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors font-semibold uppercase tracking-widest text-sm group">
                        View Full Schedule 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Classes;
