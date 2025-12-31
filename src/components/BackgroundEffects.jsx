import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 300; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1, // Smaller size for stars
                    duration: Math.random() * 3 + 1, // Faster twinkling
                    delay: Math.random() * 5,
                });
            }
            setHearts(newStars); // Keeping state name 'hearts' to minimize changes or I should rename it
        };

        generateStars();
    }, []);

    return (
        <div className="bg-effects">
            {hearts.map((star) => (
                <motion.div
                    key={star.id}
                    style={{
                        position: 'absolute',
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        background: 'white',
                        borderRadius: '50%',
                        boxShadow: `0 0 ${star.size * 2}px white`,
                        opacity: 0.3
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
            <div style={{
                position: 'absolute',
                inset: 0,
                // Using a transparent gradient or keeps the stardust if available, but let's just use the stars we generated
                background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))',
                pointerEvents: 'none'
            }}></div>
        </div>
    );
};

export default BackgroundEffects;
