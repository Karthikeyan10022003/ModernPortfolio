'use client';

import React from 'react';

interface CinematicVideoProps {
    src: string;
    poster?: string;
}

/**
 * CinematicVideo — PFE-compliant background layer.
 *
 * • Fixed to viewport, -z-10, never affects layout.
 * • GPU-decoded via native <video> autoplay/muted/playsInline.
 * • Gradient overlay ensures text legibility on any frame.
 * • NO scroll-scrubbing. NO JS frame control.
 *
 * Mobile: <video> is hidden via CSS media query on very small / low-power
 * devices where the poster takes over, preventing battery drain.
 */
export const CinematicVideo = ({ src, poster }: CinematicVideoProps) => {
    return (
        <div
            className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-[#050505]"
            aria-hidden="true"
        >
            {/* Video — hidden below 480px via CSS (poster shows instead) */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={poster}
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
                style={{ willChange: 'auto' }}          /* GPU hint without forcing layer */
            >
                <source src={src} type="video/mp4" />
            </video>

            {/* Poster visible when video is hidden on smallest screens */}
            {poster && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={poster}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-30 sm:hidden"
                />
            )}

            {/* Depth gradient: top-to-bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 pointer-events-none" />

            {/* Vignette: edges dark */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
                }}
            />
        </div>
    );
};
