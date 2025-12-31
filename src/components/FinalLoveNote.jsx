import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FinalLoveNote = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="final-section">
            <motion.div
                animate={{ scale: isHovered ? 1.1 : [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ cursor: 'pointer', textAlign: 'center' }}
            >
                <h2 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Forever Us 💖</h2>
                <p style={{ fontSize: '1.2rem', color: '#888' }}>Happy New Year, my love.</p>
            </motion.div>

            <footer style={{ position: 'absolute', bottom: '1.25rem', fontSize: '0.8rem', color: '#aaa' }}>
                Made with ❤️ for Mahrukh
            </footer>
        </section>
    );
};

export default FinalLoveNote;
