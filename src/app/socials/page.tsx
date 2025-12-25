import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";
import { getLatestVideos } from "@/lib/youtube";

export const revalidate = 3600;

export default async function SocialsPage() {
    const [mainVideos, funnyVideos] = await Promise.all([
        getLatestVideos('UCjYWtd20ZhIWp1Qi806xtQw'), // Jena Babu Vlogs
        getLatestVideos('UCRuzSPzSabqTs2rlXowJx4g')  // The Funny Blogger
    ]);

    return (
        <main className="min-h-screen pt-24 bg-white">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h1 className="text-4xl font-bold font-baloo mb-4">Connect with Me</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Follow me on all platforms for daily updates, behind-the-scenes fun, and more Odia vibes!
                </p>
            </div>
            <InstagramGallery mainVideos={mainVideos} funnyVideos={funnyVideos} />
            <Footer />
        </main>
    );
}
