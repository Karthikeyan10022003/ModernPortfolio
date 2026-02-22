'use client';

import React from 'react';

/**
 * Hud — fixed overlay for brand mark + telemetry.
 * Client only for interactivity (pointer-events-none for telemetry).
 */
export const Hud = () => {
    return (
        <>
            {/* Brand mark — top left */}
            <div className="fixed top-4 left-4 md:top-7 md:left-7 z-50 pointer-events-none select-none">
                <span className="text-white font-black text-base md:text-lg tracking-[0.5em]">VK</span>
            </div>

            {/* Telemetry — bottom right */}
            <div className="fixed bottom-4 right-4 md:bottom-7 md:right-7 z-50 text-right pointer-events-none select-none">
                <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-blue-400 text-[7px] md:text-[8px] font-black tracking-[0.4em] uppercase">
                        PILOT_ACTIVE
                    </span>
                </div>
                <span className="text-white/20 text-[7px] md:text-[8px] font-bold tracking-[0.3em] uppercase">
                    POS: 48.29.100.22
                </span>
            </div>
        </>
    );
};
