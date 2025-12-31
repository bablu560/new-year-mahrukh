import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Proposal = ({ onAccept }) => {
    const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

    const moveNoBtn = () => {
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 300 - 150;
        setNoBtnPos({ x, y });
    };

    return (
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', zIndex: 20 }}>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="glass-card"
                style={{ padding: '3rem', maxWidth: '600px', margin: '0 20px' }}
            >
                <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>
                    Will You Make my Better Half?
                </h1>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                        style={{
                            background: 'var(--color-warm-red)',
                            color: '#1a1a2e', // Dark text on light button (silver/white)
                            padding: '15px 40px',
                            fontSize: '1.5rem',
                            borderRadius: '50px',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.4)'
                        }}
                        onClick={onAccept}
                    >
                        Yes 💖
                    </motion.button>

                    <motion.button
                        animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                        transition={{ duration: 0.2 }} // Fast movement
                        onMouseEnter={moveNoBtn}
                        onClick={moveNoBtn} // Move on click too
                        style={{
                            background: '#eee',
                            color: '#555',
                            padding: '15px 40px',
                            fontSize: '1.5rem',
                            borderRadius: '50px',
                            border: 'none',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                    >
                        No 😢
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Proposal;
