'use client';

import React, { useEffect, useState } from 'react';

/**
 * Hud — fixed overlay for brand mark + telemetry.
 */
export const Hud = () => {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState('00:00:00');
    const [sessionTime, setSessionTime] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [coordX, setCoordX] = useState('0.000');

    useEffect(() => {
        setMounted(true);
        setCoordX(Math.random().toFixed(3));

        // Clock
        const term = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);

        // Session Timer
        const session = setInterval(() => {
            setSessionTime(prev => prev + 1);
        }, 1000);

        // Scroll Progress
        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollPercent(scrolled);
            document.documentElement.style.setProperty('--scroll-percent', (scrolled / 100).toString());
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearInterval(term);
            clearInterval(session);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Prevent hydration mismatch by returning null or a static shell during server rendering
    if (!mounted) return null;

    return (
        <>
            {/* Scroll Indicator Line (Left) — Hidden on smallest mobile */}
            <div className="scroll-line hidden sm:block" />

            {/* Brand mark — top left */}
            <div className="fixed top-6 left-6 md:top-8 md:left-10 z-50 pointer-events-none select-none">
                <div className="flex flex-col gap-0.5">
                    <span className="text-white font-black text-lg md:text-2xl tracking-[0.4em] font-futuristic">VK</span>
                    <span className="hidden sm:inline-block text-blue-500/50 text-[6px] md:text-[7px] font-bold tracking-[0.8em] uppercase ml-1">
                        SYS_PROTOCOL_v0.4
                    </span>
                </div>
            </div>

            {/* Live Clock & Session — top right */}
            <div className="fixed top-6 right-6 md:top-8 md:right-10 z-50 pointer-events-none select-none text-right flex flex-col gap-1 md:gap-2">
                <div className="flex flex-col gap-0">
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-widest tabular-nums">{time}</span>
                    <span className="text-blue-500/40 text-[7px] md:text-[8px] font-black tracking-[0.2em] uppercase">
                        UPTIME // {Math.floor(sessionTime / 3600).toString().padStart(2, '0')}:
                        {Math.floor((sessionTime % 3600) / 60).toString().padStart(2, '0')}:
                        {(sessionTime % 60).toString().padStart(2, '0')}
                    </span>
                </div>
            </div>

            {/* Main HUD Telemetry — bottom right */}
            <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 pointer-events-none select-none">
                <div className="flex flex-col items-end gap-3 md:gap-6">
                    {/* Status Cluster */}
                    <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="text-blue-500 font-black text-[9px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase">PILOT_ACTIVE</span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        </div>
                        <span className="hidden md:inline-block text-white/20 text-[7px] font-bold tracking-[0.3em] uppercase">LINK: DIRECT_CON</span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col items-end gap-1 md:gap-2">
                        <div className="flex items-center gap-2 md:gap-4 border-t border-white/5 pt-2 md:pt-4">
                            <span className="text-white/30 text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase">
                                SCROLL_DEPTH // {Math.round(scrollPercent).toString().padStart(3, '0')}%
                            </span>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <span className="text-white/10 text-[7px] font-bold tracking-widest tabular-nums uppercase">COORD_X: {coordX}</span>
                            <span className="text-white/10 text-[7px] font-bold tracking-widest tabular-nums uppercase">STABILITY: 0.98</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Left — Hint — Hidden on Mobile */}
            <div className="fixed bottom-10 left-10 z-50 pointer-events-none select-none hidden lg:block">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-white/10" />
                    <span className="text-white/10 text-[8px] font-black tracking-[0.5em] uppercase">NAV_OVERLAY</span>
                </div>
            </div>
        </>
    );
};
