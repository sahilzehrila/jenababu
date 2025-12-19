'use client';

import { useEffect, useRef, useState } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AutoDialogue() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isBlocked, setIsBlocked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.muted = false;
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setIsBlocked(false);
                })
                .catch((err) => {
                    console.warn("Autoplay blocked. Waiting for interaction.", err);
                    setIsBlocked(true);
                });
        }
    };

    // 1. Play ONLY on entry (Initial load or Refresh)
    useEffect(() => {
        // Small delay helps browser handle the request better
        const timer = setTimeout(playAudio, 300);

        // Backup: Trigger on any first interaction if autoplay is blocked
        const triggerOnFirstInteraction = () => {
            playAudio();
            cleanup();
        };

        const cleanup = () => {
            window.removeEventListener('scroll', triggerOnFirstInteraction);
            window.removeEventListener('mousemove', triggerOnFirstInteraction);
            window.removeEventListener('touchstart', triggerOnFirstInteraction);
            window.removeEventListener('click', triggerOnFirstInteraction);
        };

        window.addEventListener('scroll', triggerOnFirstInteraction);
        window.addEventListener('mousemove', triggerOnFirstInteraction);
        window.addEventListener('touchstart', triggerOnFirstInteraction);
        window.addEventListener('click', triggerOnFirstInteraction);

        return () => {
            clearTimeout(timer);
            cleanup();
        };
    }, []); // Empty array = Only on Refresh/Initial Load

    return (
        <>
            <audio
                ref={audioRef}
                src="/assets/sounds/audiofb.mp3"
                preload="auto"
                onEnded={() => setIsPlaying(false)}
            />

            <AnimatePresence>
                {isBlocked && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed bottom-6 right-6 z-[100]"
                    >
                        <button
                            onClick={() => {
                                audioRef.current?.play();
                                setIsBlocked(false);
                                setIsPlaying(true);
                            }}
                            className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full shadow-2xl shadow-primary/40 font-bold hover:scale-105 active:scale-95 transition-transform group"
                        >
                            <span className="animate-pulse flex items-center justify-center bg-white/20 rounded-full p-1">
                                <VolumeX size={18} />
                            </span>
                            <span>Click to Hear Dialogue</span>
                            <div className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                Browser blocked autoplay - tap to hear!
                            </div>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
