'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Video } from '@/lib/youtube';

export default function YouTubeFeed({ videos }: { videos: Video[] }) {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 font-baloo">
                        Latest from <span className="text-[#FF0000]">YouTube</span>
                    </h2>
                    <p className="text-xl text-slate-600">Catch up with the latest Sunday fun! Tap to watch.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedVideo(video)}
                            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 cursor-pointer active:scale-95 transition-transform"
                        >
                            <div className="block relative aspect-video overflow-hidden">
                                {/* Thumbnail - Prefer High Res if available in future, using provided thumbnail for now */}
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center text-white shadow-lg animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform duration-300">
                                        <Play fill="currentColor" size={32} className="ml-1" />
                                    </div>
                                </div>

                                {/* Timestamp Badge */}
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    {new Date(video.pubDate).toLocaleDateString()}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold line-clamp-2 mb-2 group-hover:text-[#FF0000] transition-colors font-baloo">
                                    {video.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-red-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title={selectedVideo.title}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
