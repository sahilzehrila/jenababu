'use client';

import { getLatestVideos } from '@/lib/youtube';
import YouTubeFeed from "@/components/YouTubeFeed";
import { useEffect, useState } from 'react';
import { Video } from '@/lib/youtube';

export default function VideosPage() {
    // Since this is a client page for simpler logic, we need to fetch data or use server component.
    // Converting to Client Component for consistent transitions, but fetching needs careful handling in Next 13+.
    // Actually, let's keep it simple: We'll fetch in a useEffect for now since we are in "Mock/Client" mode primarily,
    // or we could make this a Server Component. Let's make it a wrapper.

    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const vids = await getLatestVideos();
            setVideos(vids);
            setLoading(false);
        }
        load();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <main className="min-h-screen pt-24 bg-slate-50">
            <YouTubeFeed videos={videos} />
        </main>
    );
}
