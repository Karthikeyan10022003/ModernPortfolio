import React from 'react';

const contacts = [
    { label: 'Email', val: 'kmn722314@gmail.com', href: 'mailto:kmn722314@gmail.com' },
    { label: 'Phone', val: '+91 6381338931', href: 'tel:+916381338931' },
    { label: 'LinkedIn', val: 'Connect VK', href: 'https://www.linkedin.com/in/karthikeyan-v-25759429a/' },
];

export const Globe = () => {
    return (
        <section className="relative w-full py-32 md:py-48 px-5 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center overflow-hidden">
            {/* Glow decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/5 blur-[160px] pointer-events-none rounded-full" />

            <div className="max-w-6xl w-full relative z-10">
                {/* Header */}
                <div className="mb-20 md:mb-32 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-px bg-blue-500/30" />
                        <span className="text-blue-400 font-bold text-[10px] md:text-[11px] tracking-[0.6em] uppercase">
                            MISSION_COMPLETE // 05
                        </span>
                        <span className="w-12 h-px bg-blue-500/30" />
                    </div>
                    <h2 className="text-[clamp(2.5rem,10vw,7.5rem)] font-black tracking-[-0.05em] uppercase leading-[0.85] font-futuristic">
                        CON<span className="text-blue-500">TACT</span>
                    </h2>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
                    {contacts.map(({ label, val, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-10 flex flex-col items-start gap-8 group hover:border-blue-500/40 transition-all duration-500"
                        >
                            {/* Professional Tech Marker */}
                            <div className="flex items-center gap-3">
                                <div className="relative w-4 h-4">
                                    <div className="absolute inset-0 border border-blue-500/30 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                                    <div className="absolute inset-1 bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors" />
                                </div>
                                <span className="text-[9px] font-black tracking-[0.4em] uppercase text-white/20 group-hover:text-blue-400 transition-colors font-futuristic">
                                    {label}
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <span className="text-[14px] md:text-[16px] font-bold uppercase tracking-tight text-white/60 group-hover:text-white transition-colors break-all">
                                    {val}
                                </span>
                                <div className="w-0 group-hover:w-full h-px bg-blue-500/30 transition-all duration-500" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex flex-col items-center gap-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-center text-white/10 text-[10px] font-bold tracking-[0.6em] uppercase">
                            SYSTEM_RECOVERY_2026 // CHENNAI_BASE_STATION
                        </p>
                        <div className="flex items-center gap-4 text-[8px] font-black text-white/5 tracking-[0.4em] uppercase">
                            <span>BUILT_BY_VK</span>
                            <span className="w-1 h-1 rounded-full bg-white/5" />
                            <span>v0.4.2_LATEST</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

