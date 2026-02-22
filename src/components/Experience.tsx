import React from 'react';

const timeline = [
    {
        type: 'work',
        role: 'Software Engineer',
        org: 'Riota Group of Companies',
        period: 'Aug 2024 – Present',
        desc: 'Architecting high-impact software systems and mastering emerging technologies in a fast-paced production environment.',
        active: true,
    },
    {
        type: 'edu',
        role: 'B.Tech – Information Technology',
        org: 'Sri Sairam Engineering College',
        period: 'Jun 2020 – Jun 2024',
        desc: 'Graduated with distinction — 8.29 CGPA. Core focus on logic, algorithms, and modern system design.',
        active: false,
        badge: '8.29 GPA',
    },
    {
        type: 'edu',
        role: '12th Standard',
        org: 'Sri Ahobila Math Oriental High Sec',
        period: 'Apr 2019 – Mar 2020',
        desc: 'Completed with 82%, establishing a strong academic foundation.',
        active: false,
        badge: '82%',
    },
];

export const Experience = () => {
    return (
        <section className="relative w-full py-20 md:py-36 px-5 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <span className="inline-block text-blue-400 font-bold text-[9px] md:text-[10px] tracking-[0.5em] uppercase mb-4 opacity-70">
                        04 // LOG_DATA
                    </span>
                    <h2 className="text-[clamp(1.4rem,4vw,2.8rem)] font-black uppercase leading-tight">
                        Experience &amp; Education
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative flex flex-col gap-0">
                    {/* Vertical line */}
                    <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-white/10 to-transparent" />

                    {timeline.map((item, i) => (
                        <div key={i} className="relative pl-9 md:pl-12 pb-10 md:pb-14 last:pb-0">
                            {/* Node */}
                            <div
                                className={`absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center
                  ${item.active
                                        ? 'border-blue-500 bg-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                                        : 'border-white/20 bg-white/5'
                                    }`}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <h3 className="text-[clamp(1rem,2.5vw,1.6rem)] font-black uppercase leading-tight">
                                        {item.role}
                                    </h3>
                                    {item.badge && (
                                        <span className="text-[9px] font-black text-blue-400 border border-blue-500/30 px-2 py-0.5 tracking-widest shrink-0">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[9px] md:text-[10px] font-bold tracking-wider uppercase">
                                    <span className={item.active ? 'text-blue-400' : 'text-white/40'}>
                                        {item.org}
                                    </span>
                                    <span className="text-white/20">{item.period}</span>
                                </div>
                                <p className="text-white/50 text-[10px] md:text-xs leading-relaxed font-semibold uppercase mt-1">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
