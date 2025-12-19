import Hero from "@/components/Hero";
import FoodMap from "@/components/FoodMap";
import Footer from "@/components/Footer";
import YouTubeFeed from "@/components/YouTubeFeed";
import InstagramGallery from "@/components/InstagramGallery";
import { getLatestVideos } from "@/lib/youtube";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const revalidate = 21600;

export default async function Home() {
  const videos = await getLatestVideos();
  // Use first video ID for background if available
  const latestVideoId = videos.length > 0 ? videos[0].id : undefined;

  return (
    <main className="min-h-screen">
      <Hero videoId={latestVideoId} />

      {/* Quick Links Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/videos" className="group p-6 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors border border-orange-100">
            <h3 className="text-xl font-bold font-baloo mb-2 text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
              Latest Vlogs <ArrowRight size={20} />
            </h3>
            <p className="text-slate-600 text-sm">Watch the newest Sunday funday videos right now!</p>
          </Link>
          <Link href="/journey" className="group p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100">
            <h3 className="text-xl font-bold font-baloo mb-2 text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
              My Journey <ArrowRight size={20} />
            </h3>
            <p className="text-slate-600 text-sm">From 0 to 84K+ Family - see how it all started.</p>
          </Link>
          <Link href="/contact" className="group p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors border border-green-100">
            <h3 className="text-xl font-bold font-baloo mb-2 text-green-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
              Collaborate <ArrowRight size={20} />
            </h3>
            <p className="text-slate-600 text-sm">Brand promotions, food reviews, and events.</p>
          </Link>
        </div>
      </section>

      {/* Videos Section on Home */}
      <YouTubeFeed videos={videos} />

      {/* Instagram Section on Home */}
      <InstagramGallery />

      <FoodMap />
      <Footer />
    </main>
  );
}
