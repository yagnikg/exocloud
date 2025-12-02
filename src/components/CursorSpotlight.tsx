'use client';

import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

export default function CursorSpotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor movement
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const background = useMotionTemplate`radial-gradient(
    600px circle at ${smoothX}px ${smoothY}px,
    rgba(0, 243, 255, 0.15),
    transparent 80%
  )`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
            style={{
                background,
            }}
        />
    );
}
