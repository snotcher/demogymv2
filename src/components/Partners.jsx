import React from 'react';

const Partners = () => {
    return (
        <section className="w-full bg-zinc-950 border-t border-white/5 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-zinc-500 text-sm font-medium tracking-widest uppercase mb-10">Trusted by athletes from</p>
                <div className="flex flex-nowrap justify-center items-center gap-6 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto no-scrollbar">
                    <iconify-icon icon="simple-icons:nike" width="45" class="text-white lg:w-[70px]"></iconify-icon>
                    <iconify-icon icon="simple-icons:underarmour" width="28" class="text-white lg:w-[40px]"></iconify-icon>
                    <iconify-icon icon="simple-icons:gymshark" width="60" class="text-white lg:w-[100px]"></iconify-icon>
                    <iconify-icon icon="simple-icons:adidas" width="35" class="text-white lg:w-[50px]"></iconify-icon>
                    <iconify-icon icon="simple-icons:reebok" width="55" class="text-white lg:w-[90px]"></iconify-icon>
                </div>
            </div>
        </section>
    );
};

export default Partners;
