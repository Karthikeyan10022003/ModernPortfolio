import React from 'react';
import { HeroEntrance } from './HeroEntrance';

/**
 * Hero — RSC. All content pre-rendered. Only HeroEntrance hydrates (transform/opacity).
 */
export const Hero = () => {
    return (
        <section className="relative h-svh min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Cinematic grid texture */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            {/* Blue accent glow */}
            <div className="absolute inset-0 bg-radial-dark pointer-events-none" />

            <HeroEntrance>
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 max-w-6xl mx-auto">

                    {/* Status pill — multi-layered */}
                    <div className="group relative mb-6 md:mb-12">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-none blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 border border-white/5 bg-black/60 backdrop-blur-md">
                            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-white/60 font-bold text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase">
                                STATUS // STABLE_CON
                            </span>
                        </div>
                    </div>

                    {/* Name - Adjusted clamp for mobile */}
                    <h1 className="text-[clamp(1.8rem,14vw,8.5rem)] font-black tracking-[-0.04em] leading-[0.85] mb-6 md:mb-10 uppercase text-white font-futuristic break-words w-full">
                        V&nbsp;KARTHIKEYAN
                    </h1>

                    {/* Role */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-10 md:mb-16">
                        <p className="text-blue-400/70 text-[clamp(0.6rem,2vw,1rem)] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold">
                            Software&nbsp;Engineer
                        </p>
                        <div className="hidden md:block w-px h-4 bg-white/10" />
                        <p className="text-white/30 text-[clamp(0.6rem,2vw,1rem)] tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">
                            Python&nbsp;Developer
                        </p>
                    </div>

                    {/* Quick info grid - 2 cols on mobile */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-16 text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.5em] text-white/20 uppercase border-y border-white/5 py-6 md:py-8 w-full max-w-4xl">
                        <div className="flex flex-col gap-1 col-span-2 md:col-span-1 border-b border-white/5 md:border-none pb-4 md:pb-0">
                            <span className="text-white/10 text-[7px] md:text-[8px]">MAIL</span>
                            <span className="text-white/40 break-all md:break-normal">kmn722314@gmail.com</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/10 text-[7px] md:text-[8px]">LOC</span>
                            <span className="text-white/40">Chennai, IN</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/10 text-[7px] md:text-[8px]">VER</span>
                            <span className="text-white/40">Build 2026</span>
                        </div>
                    </div>
                </div>
            </HeroEntrance>

            {/* Scroll indicator - fluid */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 opacity-30">
                <span className="text-[7px] md:text-[9px] tracking-[0.4em] md:tracking-[0.6em] uppercase text-white/40">Scroll</span>
                <div className="relative w-[1px] h-10 md:h-16 overflow-hidden">
                    <div className="absolute inset-0 bg-white/10" />
                    <div className="absolute inset-0 bg-blue-500/40 animate-[scroll-hint_2s_ease-in-out_infinite]" />
                </div>
            </div>

            {/* CRT scanlines */}
            <div className="absolute inset-0 bg-scanlines opacity-[0.03] pointer-events-none" />
        </section>
    );
};


