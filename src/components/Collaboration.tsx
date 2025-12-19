'use client';

import { Mail, Phone, MapPin, Download } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function Collaboration() {
    return (
        <section className="py-20 bg-slate-900 text-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-baloo mb-6">Let's Collaborate</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Looking to promote your brand in Odisha? Reach thousands of foodies and fun-lovers with Jena Babu!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info Card */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold mb-8 text-primary">Contact Channels</h3>

                        <div className="space-y-6">
                            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors">
                                <div className="bg-primary/20 p-3 rounded-full text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email for Inquiries</h4>
                                    <p className="text-slate-400">{SITE_CONFIG.contact.email}</p>
                                    <span className="text-xs text-green-400">Response in 24 hrs</span>
                                </div>
                            </a>

                            <a href={`https://wa.me/91${SITE_CONFIG.contact.phone}`} target="_blank" className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors">
                                <div className="bg-blue-500/20 p-3 rounded-full text-blue-400 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">WhatsApp / Business</h4>
                                    <p className="text-slate-400">{SITE_CONFIG.contact.phone}</p>
                                    <span className="text-xs text-red-400 bg-red-900/30 px-2 py-0.5 rounded">Messages Only</span>
                                </div>
                            </a>

                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.contact.location)}`} target="_blank" className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors">
                                <div className="bg-green-500/20 p-3 rounded-full text-green-400 group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Base Location</h4>
                                    <p className="text-slate-400">{SITE_CONFIG.contact.location}</p>
                                    <p className="text-xs text-slate-500">Available for travel across India</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <button className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                                <Download size={20} /> Download Media Kit (PDF)
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl p-8 text-slate-900">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Name</label>
                                    <input type="text" className="w-full bg-slate-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Brand/Company</label>
                                    <input type="text" className="w-full bg-slate-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-primary" placeholder="Brand Name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Email</label>
                                <input type="email" className="w-full bg-slate-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-primary" placeholder="you@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Collaboration Type</label>
                                <select className="w-full bg-slate-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-primary">
                                    <option>Brand Promotion</option>
                                    <option>Food Review Invitation</option>
                                    <option>Event Appearance</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Budget Range</label>
                                <select className="w-full bg-slate-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-primary">
                                    <option>Under ₹5,000</option>
                                    <option>₹5,000 - ₹20,000</option>
                                    <option>₹20,000 - ₹50,000</option>
                                    <option>₹50,000+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Message</label>
                                <textarea className="w-full bg-slate-100 border-none rounded-lg p-3 h-32 focus:ring-2 focus:ring-primary" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-primary/30">
                                Send Proposal 🚀
                            </button>
                            <p className="text-xs text-center text-slate-500 mt-2">
                                Powered by Formspree (Free)
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
