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
    },
];

export const Experience = () => {
    return (
        <section className="relative w-full py-20 md:py-32 px-5 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden">
            <div className="max-w-5xl w-full relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-20">
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <span className="w-8 md:w-12 h-px bg-blue-500/30" />
                        <span className="text-blue-400 font-bold text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase">
                            ARCHIVE // 02
                        </span>
                    </div>
                    <h2 className="text-[clamp(1.5rem,8vw,3.5rem)] font-black uppercase leading-tight font-futuristic">
                        Experience <span className="text-white/20">&amp;</span><br />Education
                    </h2>
                </div>

                <div className="relative pl-8 md:pl-16">
                    {/* Vertical line */}
                    <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.2)]" />

                    <div className="flex flex-col gap-16 md:gap-24">
                        {timeline.map((item, idx) => (
                            <div key={idx} className="relative group">
                                {/* Timeline Node */}
                                <div
                                    className={`absolute -left-[23px] md:-left-[55px] top-1.5 w-5 h-5 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10
                                      ${item.active
                                            ? 'border-blue-500 bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                                            : 'border-white/10 bg-[#050505] group-hover:border-white/30'
                                        }`}
                                >
                                    <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${item.active ? 'bg-blue-400' : 'bg-white/20'}`} />
                                </div>

                                <div className="flex flex-col gap-3 md:gap-4 group-hover:translate-x-2 transition-all duration-500">
                                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                                        <span className={`text-[9px] md:text-[11px] font-black tracking-widest uppercase transition-colors duration-500 ${item.active ? 'text-blue-400' : 'text-white/30'}`}>
                                            {item.period}
                                        </span>
                                        <span className="text-[8px] md:text-[9px] px-2 py-0.5 border border-white/5 text-white/20 font-bold tracking-widest uppercase bg-white/[0.02]">
                                            {item.type}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-3xl font-black uppercase leading-tight tracking-tight font-futuristic">
                                        {item.role}
                                    </h3>

                                    <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold text-white/50 tracking-wider">
                                        <span className="text-blue-500/50">@</span>
                                        <span className="uppercase">{item.org}</span>
                                    </div>

                                    <p className="text-white/40 text-[11px] md:text-sm leading-relaxed max-w-2xl font-medium mt-2">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
