import React from 'react';
import { motion } from 'framer-motion';

const quotes = [
    { text: "Every love story is beautiful, but ours is my favorite.", author: "Unknown" },
    { text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" },
    { text: "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.", author: "Leo Christopher" }
];

const Memories = () => {
    return (
        <section className="memories-section">
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.h2
                    className="text-center"
                    style={{ fontSize: '3rem', marginBottom: '4rem' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Words of Love
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {quotes.map((quote, index) => (
                        <motion.div
                            key={index}
                            className="glass-card quote-card"
                            style={{
                                marginLeft: index % 2 === 0 ? '0' : 'auto',
                                marginRight: index % 2 === 0 ? 'auto' : '0',
                                width: '100%',
                                maxWidth: '80%'
                            }}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="quote-mark top">"</span>
                            <p style={{ fontSize: '1.5rem', textAlign: 'center', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                                {quote.text}
                            </p>
                            <span className="quote-mark bottom">"</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Memories;
