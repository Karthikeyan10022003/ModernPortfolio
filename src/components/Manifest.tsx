import React from 'react';

const projects = [
    {
        id: '01',
        title: 'Eye Movement Analysis',
        tech: ['Python', 'OpenCV', 'ML'],
        desc: 'Advanced CV project analyzing and predicting eye movements using image processing and machine learning models.',
        status: 'DEPLOYED',
    },
    {
        id: '02',
        title: 'Object Detection Portal',
        tech: ['Flutter', 'Python', 'TensorFlow'],
        desc: 'High-performance web portal for real-time inference feeds, custom model management, and remote monitoring.',
        status: 'LIVE',
    },
    {
        id: '03',
        title: 'Vending Interface',
        tech: ['PyQt5', 'Python', 'Serial'],
        desc: 'Desktop applications for hardware-integrated vending systems with inventory management and machine telemetry.',
        status: 'SHIPPED',
    },
];


export const Manifest = () => {
    return (
        <section className="relative w-full py-20 md:py-32 px-5 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden">
            <div className="max-w-6xl w-full relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-20">
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <span className="w-8 md:w-12 h-px bg-blue-500/30" />
                        <span className="text-blue-400 font-bold text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase">
                            MANIFESTO // 03
                        </span>
                    </div>
                    <h2 className="text-[clamp(1.5rem,7vw,4.5rem)] font-black leading-[1.0] uppercase mb-10 max-w-4xl font-futuristic">
                        ARCHITECTING {' '}
                        <span className="text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]">SYSTEMS</span> {' '}
                        FOR THE NEXT REALITY.
                    </h2>

                    <div className="glass-card p-6 md:p-10 border-l-2 border-l-blue-500/50 bg-blue-500/[0.02]">
                        <p className="text-white/40 text-[clamp(0.85rem,2vw,1.1rem)] leading-[1.6] md:leading-relaxed font-medium uppercase tracking-wide">
                            I build digital infrastructure that bridges the gap between high-performance engineering and cinematic user experience. Every line of code is a waypoint toward a more immersive, reactive, and fluid web.
                        </p>
                    </div>
                </div>

                {/* Grid Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
                    <div className="flex flex-col gap-2">
                        <span className="text-blue-500 font-black text-[9px] md:text-[11px] tracking-[0.4em] uppercase">PROJECT_LOG</span>
                        <div className="w-12 h-px bg-white/20" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-white/10 text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase tabular-nums">SYNC_ACTIVE // {projects.length} ITEMS</span>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            className="glass-card p-8 md:p-10 flex flex-col gap-8 group hover:border-blue-500/30 transition-all duration-700"
                        >
                            <div className="flex items-center justify-between w-full">
                                <span className="text-white/10 font-black text-[10px] md:text-[11px] tracking-widest font-futuristic">{p.id}</span>
                                <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase text-blue-500/50 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-blue-500/40" />
                                    {p.status}
                                </span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl md:text-2xl font-black uppercase leading-tight text-white group-hover:text-blue-400 transition-colors font-futuristic min-h-[2.5em] flex items-end">
                                    {p.title}
                                </h3>
                                <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-blue-500/30 transition-all duration-500" />
                            </div>

                            <p className="text-white/30 text-[11px] md:text-sm leading-relaxed font-medium mt-auto">
                                {p.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-0.5 text-[8px] md:text-[9px] font-black tracking-widest uppercase border border-white/10 text-white/20 group-hover:border-blue-500/20 group-hover:text-blue-500/50 transition-all"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

