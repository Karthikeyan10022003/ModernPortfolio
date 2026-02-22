import React from 'react';
import { Hero } from '@/components/Hero';
import { Manifest } from '@/components/Manifest';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Globe } from '@/components/Globe';
import { Hud } from '@/components/Hud';
import { CinematicVideo } from '@/components/CinematicVideo';

/**
 * Home — React Server Component.
 * Client JS budget: only CinematicVideo, Hud, and HeroEntrance hydrate.
 */
export default function Home() {
  return (
    <main className="relative w-full min-h-screen text-white">

      {/* ────────────────────────────────────────
          Cinematic background: GPU-decoded video.
          Fixed, -z-10, no scroll-scrubbing.
      ──────────────────────────────────────── */}
      <CinematicVideo
        src="/globe-loop.mp4"
        poster="/sequence-1/ezgif-frame-001.jpg"
      />

      {/* Persistent HUD overlay */}
      <Hud />

      {/* ────────────────────────────────────────
          Content — all RSC, pre-rendered HTML.
      ──────────────────────────────────────── */}
      <article className="relative z-10 flex flex-col">
        <Hero />

        {/* Visual section dividers */}
        <div className="divider mx-5 sm:mx-8 md:mx-16 lg:mx-24" />
        <Manifest />

        <div className="divider mx-5 sm:mx-8 md:mx-16 lg:mx-24" />
        <Skills />

        <div className="divider mx-5 sm:mx-8 md:mx-16 lg:mx-24" />
        <Experience />

        <div className="divider mx-5 sm:mx-8 md:mx-16 lg:mx-24" />
        <Globe />
      </article>
    </main>
  );
}
