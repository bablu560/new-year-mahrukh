import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Moon, Star, Sparkles } from 'lucide-react';

const promises = [
    { icon: Moon, text: "I promise to be your light when the world gets dark." },
    { icon: Star, text: "I promise to dream with you, no matter how high we fly." },
    { icon: Heart, text: "I promise to love you across every distance and time." },
    { icon: Sparkles, text: "I promise to keep our magic alive, forever." },
];

const OurPromise = () => {
    return (
        <section className="promise-section">
            <div className="container">
                <motion.h2
                    className="text-center"
                    style={{ fontSize: '3rem', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Promises to You
                </motion.h2>

                <div className="promise-grid">
                    {promises.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card promise-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ color: 'var(--color-rose-gold)', marginBottom: '1.5rem' }}>
                                <item.icon size={40} />
                            </div>
                            <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>"{item.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPromise;
