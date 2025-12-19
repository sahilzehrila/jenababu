'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Youtube, Instagram, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

const SITE_NAVS = [
    { label: 'Home', href: '/' },
    { label: 'Videos', href: '/videos' },
    { label: 'Journey', href: '/journey' },
    { label: 'Socials', href: '/socials' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary transition-transform group-hover:scale-110">
                            <img
                                src={SITE_CONFIG.logo}
                                alt="Suraj Jena Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-baloo text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                            Jena Babu
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {SITE_NAVS.map((nav) => (
                            <Link
                                key={nav.href}
                                href={nav.href}
                                className={clsx(
                                    "font-medium transition-colors hover:text-primary relative py-1",
                                    pathname === nav.href ? "text-primary font-bold" : "text-slate-600"
                                )}
                            >
                                {nav.label}
                                {pathname === nav.href && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                    />
                                )}
                            </Link>
                        ))}
                        <Link
                            href="https://youtube.com/@jenababuvlogs4904"
                            target="_blank"
                            className="px-6 py-2 bg-[#FF0000] text-white rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
                        >
                            Subscribe
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {SITE_NAVS.map((nav) => (
                                <Link
                                    key={nav.href}
                                    href={nav.href}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "p-3 rounded-lg text-lg font-medium",
                                        pathname === nav.href ? "bg-primary/10 text-primary" : "text-slate-600 active:bg-slate-50"
                                    )}
                                >
                                    {nav.label}
                                </Link>
                            ))}
                            <Link
                                href="https://youtube.com/@jenababuvlogs4904"
                                target="_blank"
                                className="p-3 rounded-lg text-lg font-bold bg-[#FF0000] text-white text-center"
                            >
                                Subscribe on YouTube
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
