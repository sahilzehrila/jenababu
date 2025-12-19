'use client';

import { MapPin } from 'lucide-react';

export default function FoodMap() {
    return (
        <section className="py-20 bg-slate-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-baloo mb-4">Jena Babu's Food Trail 🍛</h2>
                    <p className="text-lg text-slate-600">Explore the best food spots in Cuttack & Bhubaneswar visited by Suraj!</p>
                </div>

                <div className="bg-white p-1 md:p-2 rounded-2xl shadow-xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] relative">
                    {/* Embedded Google Map (Cuttack Centered) */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d119630.34447386762!2d85.79510103632906!3d20.46321209772591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants%20cuttack!5e0!3m2!1sen!2sin!4v1655555555555!5m2!1sen!2sin"
                        className="w-full h-full border-0 rounded-xl"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white p-3 md:p-4 rounded-xl shadow-lg md:max-w-xs flex items-center justify-between md:block">
                        <div className="flex items-center gap-3 mb-0 md:mb-2">
                            <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm md:text-base">Latest Visit</h4>
                                <p className="text-xs text-slate-500 line-clamp-1">Dahibara Aloodum, Stadium Road</p>
                            </div>
                        </div>
                        <button className="ml-4 md:ml-0 md:w-full text-center text-xs font-bold text-primary hover:underline whitespace-nowrap">
                            Get Directions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
