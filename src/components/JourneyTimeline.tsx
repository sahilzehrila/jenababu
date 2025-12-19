'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Camera, Star, Users, Trophy, Flag, Target } from 'lucide-react';

const milestones = [
    {
        year: '2016',
        title: 'Camera 📸 Uthila',
        desc: 'YouTube journey started - September 7, 2016',
        icon: Camera,
        color: 'bg-blue-500'
    },
    {
        year: '2018',
        title: 'Style Payila ✨',
        desc: 'Found the #KhantiCuttakia style. "ଆମେ ଆମ ଭାଷାରେ ଭଲୋଗ୍"',
        icon: Star,
        color: 'bg-purple-500'
    },
    {
        year: '2020',
        title: 'Family Badhila 👨‍👩‍👧‍👦',
        desc: '10K subscribers milestone reached!',
        icon: Users,
        color: 'bg-green-500'
    },
    {
        year: '2023',
        title: 'Recognition Milila 🏆',
        desc: '50K subscribers & 10M+ views',
        icon: Trophy,
        color: 'bg-yellow-500'
    },
    {
        year: '2024',
        title: 'Present 📅',
        desc: '84K+ family, Every Sunday upload. Still growing!',
        icon: Flag,
        color: 'bg-orange-500'
    },
    {
        year: 'Future',
        title: 'Dream 🎯',
        desc: 'Next goal: 1,00,000 subscribers. Silver Play Button loading...',
        icon: Target,
        color: 'bg-red-500'
    }
];

export default function JourneyTimeline() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold font-baloo text-center mb-16 text-slate-900">
                    The Odia Vlogger's Journey
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 hidden md:block" />
                    {/* Mobile Vertical Line */}
                    <div className="absolute left-10 w-1 h-full bg-slate-200 md:hidden" />

                    {milestones.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`relative flex items-center justify-between mb-12 flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                {/* Space for the other side on Desktop */}
                                <div className="hidden md:block w-5/12" />

                                {/* Node - Centered on Desktop, Left aligned on Mobile with line adjustment */}
                                <div className={`absolute left-0 pl-10 md:left-1/2 md:pl-0 transform -translate-y-1/2 top-0 md:top-1/2 md:-translate-x-1/2 w-12 h-12 flex items-center justify-center z-10`}>
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white ${item.color} flex items-center justify-center shadow-lg relative z-10`}>
                                        <item.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    {/* Mobile connecting line to card */}
                                    <div className="md:hidden absolute top-1/2 left-10 w-8 h-1 bg-slate-200 -z-10"></div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className="w-full md:w-5/12 pl-12 md:pl-0 mt-8 md:mt-0"
                                    data-aos={isEven ? 'fade-right' : 'fade-left'}
                                >
                                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-primary relative">
                                        {/* Mobile connector dot */}
                                        <div className="md:hidden absolute top-6 -left-3 w-3 h-3 bg-primary rounded-full"></div>

                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2 ${item.color}`}>
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold font-baloo mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
