import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    return (
        <motion.div
            className="music-player glass-card"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
        >
            <audio
                ref={audioRef}
                loop
                src="https://cdn.pixabay.com/audio/2022/02/07/audio_6c99db4959.mp3"
            />

            <button
                onClick={togglePlay}
                className="btn-icon-primary"
            >
                <Music size={20} />
            </button>

            <button
                onClick={toggleMute}
                className="btn-icon"
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </motion.div>
    );
};

export default MusicPlayer;
