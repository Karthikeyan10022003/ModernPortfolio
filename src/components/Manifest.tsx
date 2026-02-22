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
        title: 'Real-Time Object Detection Web Portal',
        tech: ['Flutter', 'Python', 'TensorFlow'],
        desc: 'End-to-end detection system with a live high-performance web portal — custom model management, real-time inference feeds, and remote monitoring dashboard.',
        status: 'LIVE',
    },
    {
        id: '03',
        title: 'Vending Machine Desktop Apps',
        tech: ['PyQt5', 'Python', 'PySerial'],
        desc: 'Full-featured desktop applications for coffee and napkin vending machines — hardware-integrated UI with sales tracking, inventory management, and live machine telemetry.',
        status: 'SHIPPED',
    },
];


export const Manifest = () => {
    return (
        <section className="relative w-full py-20 md:py-36 px-5 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center">
            {/* Section header */}
            <div className="max-w-5xl w-full mb-16 md:mb-24">
                <span className="inline-block text-blue-400 font-bold text-[9px] md:text-[10px] tracking-[0.5em] uppercase mb-4 opacity-70">
                    01 // THE_MANIFEST
                </span>

                <h2 className="text-[clamp(1.4rem,4.5vw,3.2rem)] font-black leading-[1.05] uppercase mb-8 max-w-3xl">
                    A DEDICATED{' '}
                    <span className="text-blue-400">SOFTWARE ARCHITECT</span>{' '}
                    BRIDGING LOGIC AND REALITY.
                </h2>

                <div className="glass-card p-5 md:p-8 max-w-2xl glow-blue">
                    <p className="text-[clamp(0.8rem,1.4vw,1rem)] leading-relaxed opacity-60 uppercase font-semibold">
                        I am a dedicated software engineer with a strong foundation in
                        Information Technology and a passion for creating innovative,
                        high-performance solutions that have real-world impact.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="divider max-w-5xl w-full mb-16 md:mb-24" />

            {/* Projects */}
            <div className="max-w-5xl w-full">
                <span className="inline-block text-blue-400 font-bold text-[9px] md:text-[10px] tracking-[0.5em] uppercase mb-8 opacity-70">
                    02 // WAYPOINTS
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            className="glass-card p-6 md:p-8 flex flex-col gap-4 group"
                        >
                            {/* Project number + status */}
                            <div className="flex items-center justify-between">
                                <span className="text-white/20 font-black text-[10px] tracking-widest">{p.id}</span>
                                <span className="text-[8px] font-black tracking-widest text-blue-400/70 border border-blue-500/20 px-2 py-0.5 uppercase">
                                    {p.status}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1rem,2.2vw,1.5rem)] font-black uppercase leading-tight text-white group-hover:text-blue-300 transition-colors">
                                {p.title}
                            </h3>

                            {/* Tech pills */}
                            <div className="flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span key={t} className="pill">{t}</span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-white/55 text-[11px] md:text-xs leading-relaxed font-semibold uppercase">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
