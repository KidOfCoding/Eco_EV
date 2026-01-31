import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface SplashScreenProps {
    onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 8000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
            <video
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={onComplete}
            >
                <source src="/Logo_Animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <button
                onClick={onComplete}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors flex items-center space-x-2 z-10"
            >
                <span className="text-sm font-medium uppercase tracking-wider">Skip</span>
                <X className="h-5 w-5" />
            </button>
        </motion.div>
    );
};
