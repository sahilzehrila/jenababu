'use client';

import { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { Youtube, Instagram, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface HeroProps {
    videoId?: string;
    subscriberCount?: string;
}

export default function Hero({ videoId, subscriberCount = SITE_CONFIG.stats.family }: HeroProps) {
    // Mouse position state removed


    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900 text-white flex items-center justify-center">
            {/* Background Video - Massive scaling to ensure no black bars ever */}
            <div className="absolute inset-0 select-none overflow-hidden pointer-events-none bg-slate-900">
                {videoId ? (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350vw] h-[350vh] md:w-[120vw] md:h-[120vh] min-w-[100%] min-h-[100%] z-0">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0`}
                            className="w-full h-full opacity-60 grayscale-[20%]"
                            style={{ pointerEvents: 'none' }}
                            allow="autoplay; encrypted-media"
                            title="Background Video"
                        />
                    </div>
                ) : (
                    <div className="w-full h-full bg-slate-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium animate-pulse">
                        🔴 {subscriberCount} Family Members & Growing
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-2 px-2">
                        <span className="text-white">SURAJ</span> <span className="text-primary group-hover:text-white transition-colors">JENA</span>
                    </h1>
                    <p className="text-xl md:text-3xl font-bold text-gray-400 mb-6 font-baloo">
                        THE FUNNY BLOGGER
                    </p>

                    <div className="text-xl sm:text-2xl md:text-4xl mt-4 font-bold text-gray-200 h-16 md:h-20">
                        <span className="text-gray-400 mr-2">I am</span>
                        <ReactTyped
                            strings={[
                                "The Funny Blogger",
                                "Eating Mutton in Cuttack",
                                "Exploring Odisha",
                                "Keeping It Real ✌️"
                            ]}
                            typeSpeed={60}
                            backSpeed={40}
                            loop
                            className="text-primary"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4"
                    >
                        <button className="group relative w-full sm:w-auto px-8 py-4 bg-primary rounded-full font-bold text-lg overflow-hidden shadow-lg shadow-primary/30 transition-transform active:scale-95">
                            <span className="relative z-10">Watch Latest Vlog</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                        <a
                            href={`mailto:${SITE_CONFIG.contact.email}`}
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-transform active:scale-95 text-center"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Social Media Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 flex justify-center gap-4 sm:gap-6"
                    >
                        <a href={SITE_CONFIG.socials.youtube} target="_blank" className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-red-600 hover:scale-110 transition-all shadow-lg text-white group" title="YouTube">
                            <Youtube size={24} className="group-hover:rotate-12" />
                        </a>
                        <a href={SITE_CONFIG.socials.instagram1} target="_blank" className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-pink-600 hover:scale-110 transition-all shadow-lg text-white group" title="Instagram 1">
                            <Instagram size={24} className="group-hover:rotate-12" />
                        </a>
                        <a href={SITE_CONFIG.socials.instagram2} target="_blank" className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-purple-600 hover:scale-110 transition-all shadow-lg text-white group" title="Instagram 2">
                            <Instagram size={24} className="group-hover:rotate-12" />
                        </a>
                        <a href={`https://wa.me/91${SITE_CONFIG.contact.phone}`} target="_blank" className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-green-600 hover:scale-110 transition-all shadow-lg text-white group" title="WhatsApp">
                            <MessageSquare size={24} className="group-hover:rotate-12" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
