import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-8">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
                        <Link href={SITE_CONFIG.socials.youtube} target="_blank" className="flex items-center gap-2 group transition-colors hover:text-red-500">
                            <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-red-600/10 transition-colors">
                                <Youtube size={20} />
                            </div>
                            <span className="text-sm font-medium">@jenababuvlogs</span>
                        </Link>
                        <Link href={SITE_CONFIG.socials.instagram1} target="_blank" className="flex items-center gap-2 group transition-colors hover:text-pink-500">
                            <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-pink-600/10 transition-colors">
                                <Instagram size={20} />
                            </div>
                            <span className="text-sm font-medium">@the_funny_blogger_youtube</span>
                        </Link>
                        <Link href={SITE_CONFIG.socials.instagram2} target="_blank" className="flex items-center gap-2 group transition-colors hover:text-purple-500">
                            <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-purple-600/10 transition-colors">
                                <Instagram size={20} />
                            </div>
                            <span className="text-sm font-medium">@jena_babu_vlogs</span>
                        </Link>
                    </div>
                    <p className="text-center font-baloo text-xl">
                        "Hasiba, Kheliba, Khusire Rahiba" <br />
                        <span className="text-sm font-sans text-slate-600">The Funny Blogger</span>
                    </p>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                    <div className="flex flex-col md:items-end gap-1 mt-4 md:mt-0">
                        <div className="flex items-center gap-1">
                            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by
                            <a href="https://rgbasket.in" target="_blank" className="font-bold text-slate-200 hover:text-white transition-colors">RG Basket Team</a>
                        </div>
                        <p className="text-[10px] text-slate-600 uppercase tracking-widest">A token of appreciation for Suraj Jena</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
