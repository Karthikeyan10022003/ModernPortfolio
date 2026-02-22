import React from 'react';

const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'Kotlin', 'Dart', 'C'] },
    { category: 'Frameworks', items: ['PyQt5', 'Flask', 'Socket', 'PySerial', 'Kivy'] },
    { category: 'Mobile Dev', items: ['Kotlin', 'Jetpack Compose', 'Flutter'] },
    { category: 'Technologies', items: ['OpenCV', 'Image Processing', 'Machine Learning'] },
];

export const Skills = () => {
    return (
        <section className="relative w-full py-20 md:py-36 px-5 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <span className="inline-block text-blue-400 font-bold text-[9px] md:text-[10px] tracking-[0.5em] uppercase mb-4 opacity-70">
                        03 // TECH_SPECS
                    </span>
                    <h2 className="text-[clamp(1.4rem,4vw,2.8rem)] font-black uppercase leading-tight">
                        Capabilities &amp; Tools
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="glass-card p-4 md:p-7 flex flex-col gap-4 group"
                        >
                            <h3 className="text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase text-white/30 group-hover:text-blue-400 transition-colors">
                                {skill.category}
                            </h3>
                            <div className="flex flex-col gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-[10px] md:text-xs font-black uppercase tracking-wider text-white/70 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-blue-500/60 shrink-0" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full -z-10" />
            </div>
        </section>
    );
};
