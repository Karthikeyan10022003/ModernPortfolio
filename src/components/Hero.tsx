import React from 'react';
import { HeroEntrance } from './HeroEntrance';

/**
 * Hero — RSC. All content pre-rendered. Only HeroEntrance hydrates (transform/opacity).
 */
export const Hero = () => {
    return (
        <section className="relative h-svh min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Cinematic grid texture */}
            <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

            {/* Blue accent glow */}
            <div className="absolute inset-0 bg-radial-dark pointer-events-none" />

            <HeroEntrance>
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">

                    {/* Status pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 bg-blue-500/10 mb-8 md:mb-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-blue-400 font-bold text-[9px] md:text-[10px] tracking-[0.5em] uppercase">
                            LINK_ESTABLISHED
                        </span>
                    </div>

                    {/* Name */}
                    <h1 className="text-[clamp(2.4rem,10vw,7rem)] font-black tracking-[-0.03em] leading-[0.88] mb-6 md:mb-8 uppercase text-white">
                        V&nbsp;KARTHIKEYAN
                    </h1>

                    {/* Role */}
                    <p className="text-white/50 text-[clamp(0.6rem,1.5vw,0.85rem)] tracking-[0.35em] uppercase mb-10 md:mb-14">
                        Software&nbsp;Engineer&nbsp;·&nbsp;Python&nbsp;Developer
                    </p>

                    {/* Divider */}
                    <div className="divider max-w-xs mb-10 md:mb-14" />

                    {/* Quick info */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[9px] md:text-[11px] font-bold tracking-[0.4em] text-white/30 uppercase">
                        <span>Email // kmn722314@gmail.com</span>
                        <span>Base // Chennai, India</span>
                        <span>Status // Active</span>
                    </div>
                </div>
            </HeroEntrance>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <span className="text-[8px] tracking-[0.5em] uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
            </div>

            {/* CRT scanlines */}
            <div className="absolute inset-0 bg-scanlines opacity-[0.025] pointer-events-none" />
        </section>
    );
};
