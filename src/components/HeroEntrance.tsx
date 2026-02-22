'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroEntrance — thin Client leaf.
 * Animates ONLY transform + opacity. No scroll-linked logic.
 */
export const HeroEntrance = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};
