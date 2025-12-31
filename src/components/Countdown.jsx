import React, { useState, useEffect } from 'react';

const Countdown = ({ onComplete }) => {
    // Use useMemo ensures targetDate is calculated ONLY ONCE when the component first loads.
    // Without this, every time the seconds update, the timer resets to 5 seconds again!
    const targetDate = React.useMemo(() => {
        const currentYear = new Date().getFullYear();
        // PRODUCTION MODE: Uncomment the line below for the real New Year countdown
        return new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();

        // TEST MODE: 5 seconds from this exact moment
        // return new Date().getTime() + 5000;
    }, []);

    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
    const [hasCompleted, setHasCompleted] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            setTimeLeft(distance);

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft(0);
                if (!hasCompleted) {
                    setHasCompleted(true);
                    if (onComplete) onComplete();
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, hasCompleted, onComplete]);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <section className="countdown-section" style={{ minHeight: 'auto', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Countdown to Our New Beginning</h2>

            <div className="timer-container">
                <TimeBox value={days} label="Days" />
                <TimeBox value={hours} label="Hours" />
                <TimeBox value={minutes} label="Minutes" />
                <TimeBox value={seconds} label="Seconds" />
            </div>
        </section>
    );
};

const TimeBox = ({ value, label }) => (
    <div className="glass-card time-box">
        <span className="time-value">
            {value < 10 ? `0${value}` : value}
        </span>
        <span className="time-label">{label}</span>
    </div>
);

export default Countdown;
