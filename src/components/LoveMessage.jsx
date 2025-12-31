import React from 'react';
import { motion } from 'framer-motion';

const LoveMessage = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="love-section">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {/* First Box: Confession */}
                <motion.div
                    className="glass-card love-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}
                >
                    <motion.div style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-rose-gold)' }} variants={textVariants}>💌</motion.div>

                    <motion.h2 variants={textVariants} style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-white)' }}>
                        My Confession
                    </motion.h2>

                    <motion.div variants={textVariants} style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'left' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Mahrukh… there’s something I’ve carried inside me for a long time — something that grows a little more every time I hear your voice, every time you smile, every time you just exist near me. I’ve tried ignoring it, hiding it, even convincing myself it’s too big to say out loud… but it’s stronger than silence now.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The truth is…<br />
                            you’re not just someone I like — you’re someone who has become a part of me without even trying.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I don’t know how it happened.<br />
                            I don’t know when it happened.<br />
                            But suddenly, your happiness mattered more than mine…<br />
                            your smile felt like something I wanted to protect…<br />
                            and your presence became the safest place in my life.
                        </p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-rose-gold)' }}>
                            This is my confession, Mahrukh:<br />
                            I’m in love with you… completely, deeply, hopelessly.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Second Box: New Year Wish */}
                <motion.div
                    className="glass-card love-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}
                >
                    <motion.h2 variants={textVariants} style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-white)' }}>
                        Mahrukh, my love…
                    </motion.h2>

                    <motion.p variants={textVariants} style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                        As we step into 2026, I just want you to know that you are the most beautiful part of my life. Every day with you feels like a story written by destiny itself — soft, gentle, and full of meaning. This new year, I don’t wish for anything big… I only wish for moments with you, smiles shared with you, and dreams built with you.
                    </motion.p>

                    <motion.p variants={textVariants} style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                        May this year bring you peace, growth, and endless happiness — and may I be the reason behind most of your smiles. Thank you for being the warmth in my cold days and the calm in my storms.
                    </motion.p>

                    <motion.div variants={textVariants} style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-rose-gold)' }}>
                            Happy New Year 2026, Mahrukh.
                        </p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--color-warm-red)' }}>
                            You are my today, my tomorrow, and every year I wish to live. ❤️
                        </p>
                    </motion.div>

                    <motion.div variants={textVariants} style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                        <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', color: 'var(--color-white)' }}>Only Yours, Babar</p>
                        <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#e0e0e0' }}>Happy New Year My Love</p>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-deep-red)' }}>Love You So Much 😘</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default LoveMessage;
