import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero-section">

            {/* Decorative Glow */}
            <div className="hero-glow"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ zIndex: 10, padding: '0 1rem' }}
            >
                <motion.h1
                    className="hero-title"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    Happy New Year<br />Mahrukh ❤️
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Every moment with you is magic. Here's to another year of love, laughter, and us.
                </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-mouse">
                    <div className="scroll-dot"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
