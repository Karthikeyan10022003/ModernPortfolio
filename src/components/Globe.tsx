import React from 'react';

const contacts = [
    { label: 'Email', val: 'kmn722314@gmail.com', href: 'mailto:kmn722314@gmail.com', icon: '✉' },
    { label: 'Phone', val: '+91 6381338931', href: 'tel:+916381338931', icon: '📞' },
    { label: 'LinkedIn', val: 'Connect VK', href: 'https://www.linkedin.com/in/karthikeyan-v-25759429a/', icon: '🔗' },
    
];

export const Globe = () => {
    return (
        <section className="relative w-full py-20 md:py-36 px-5 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/8 blur-[140px] pointer-events-none rounded-full" />

            <div className="max-w-5xl w-full relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-16 text-center">
                    <span className="inline-block text-blue-400 font-bold text-[9px] md:text-[10px] tracking-[0.5em] uppercase mb-4 opacity-70">
                        05 // MISSION_COMPLETE
                    </span>
                    <h2 className="text-[clamp(1.8rem,7vw,5rem)] font-black tracking-tighter uppercase break-words leading-[0.88]">
                        CONTACT
                    </h2>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-16">
                    {contacts.map(({ label, val, href, icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-4 md:p-7 flex flex-col items-center text-center gap-3 group"
                        >
                            <span className="text-xl md:text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                                {icon}
                            </span>
                            <span className="text-[8px] md:text-[9px] font-black tracking-[0.5em] uppercase text-white/30 group-hover:text-blue-400 transition-colors">
                                {label}
                            </span>
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider overflow-hidden text-ellipsis whitespace-nowrap w-full text-center text-white/80">
                                {val}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="divider mb-8" />
                <p className="text-center text-white/10 text-[9px] font-bold tracking-[0.5em] uppercase">
                    SYSTEM_RECOVERY_2026 // CHENNAI_BASE_STATION // END_OF_LINE
                </p>
            </div>
        </section>
    );
};
