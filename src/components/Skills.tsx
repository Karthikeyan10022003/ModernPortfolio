import React from 'react';

const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'Kotlin', 'Dart', 'C'] },
    { category: 'Frameworks', items: ['PyQt5', 'Flask', 'Socket', 'PySerial', 'Kivy'] },
    { category: 'Mobile Dev', items: ['Kotlin', 'Jetpack Compose', 'Flutter'] },
    { category: 'Technologies', items: ['OpenCV', 'Image Processing', 'Machine Learning'] },
];

export const Skills = () => {
    return (
        <section className="relative w-full py-20 md:py-32 px-5 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden">
            <div className="max-w-6xl w-full relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-20">
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <span className="w-8 md:w-12 h-px bg-blue-500/30" />
                        <span className="text-blue-400 font-bold text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase">
                            CAPABILITIES // 04
                        </span>
                    </div>
                    <h2 className="text-[clamp(1.5rem,8vw,3.5rem)] font-black uppercase leading-tight font-futuristic">
                        Technical<br />Ecosystem
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-6 md:p-8 flex flex-col gap-6 md:gap-8 group hover:border-blue-500/30 transition-all duration-500 active:scale-[0.98]"
                        >
                            <h3 className="text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase text-white/20 group-hover:text-blue-400 transition-colors font-futuristic">
                                {skill.category}
                            </h3>

                            <div className="flex flex-col gap-4 md:gap-5">
                                {skill.items.map((item) => (
                                    <div
                                        key={item}
                                        className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-3 group-hover:text-white/80 transition-colors"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:bg-blue-400 group-hover:scale-125 transition-all" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-blue-500/5 blur-[120px] md:blur-[160px] pointer-events-none rounded-full" />
        </section>
    );
};
