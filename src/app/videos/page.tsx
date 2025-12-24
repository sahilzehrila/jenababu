import { getLatestVideos } from '@/lib/youtube';
import YouTubeFeed from "@/components/YouTubeFeed";

export const revalidate = 3600; // Revalidate every hour

export default async function VideosPage() {
    const videos = await getLatestVideos();

    return (
        <main className="min-h-screen pt-24 bg-slate-50">
            <YouTubeFeed videos={videos} />
        </main>
    );
}
