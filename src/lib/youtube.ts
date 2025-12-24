import Parser from 'rss-parser';

export interface Video {
    id: string;
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    views: string;
}

const MAIN_CHANNEL_ID = 'UCjYWtd20ZhIWp1Qi806xtQw';

export async function getLatestVideos(channelId: string = MAIN_CHANNEL_ID): Promise<Video[]> {
    const parser = new Parser({
        customFields: {
            item: [
                ['media:group', 'mediaGroup'],
            ],
        },
    });

    try {
        if (!channelId || channelId.includes('REPLACE')) {
            throw new Error("No Channel ID configured");
        }

        const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);

        return feed.items.map((item: any) => {
            const mediaGroup = item.mediaGroup || {};
            const thumbnail = mediaGroup['media:thumbnail']?.[0]?.$.url || `https://i.ytimg.com/vi/${item.id.replace('yt:video:', '')}/maxresdefault.jpg`;
            const views = mediaGroup['media:community']?.[0]?.['media:statistics']?.[0]?.$.views || '0';

            return {
                id: item.id.replace('yt:video:', ''),
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                thumbnail: thumbnail,
                views: formatViews(views)
            };
        });
    } catch (error) {
        console.error(`YouTube Fetch Error for ${channelId}:`, error);
        // Fallback data (specific to main channel for now)
        const mockVideos = [
            { id: 'S7rEZ2zZP-Q', title: 'Grand Parents Day Celebration ❤ | Jena Babu Vlogs', views: '15K' },
            { id: 'dzj4n_OqExg', title: 'World Cup 2023 Final Match Experience 🏏', views: '28K' },
            { id: 'SDtcR6HLMEU', title: 'Bali Jatra Cuttack 2023 Full Tour 🔥', views: '45K' },
            { id: 'fqZjoPm0VIE', title: 'Surprise Gift for My Sister 🎁', views: '22K' },
            { id: 'lyYCWrbcNFQ', title: 'Exploring Hidden Waterfalls of Odisha 🌊', views: '30K' },
            { id: 'Niwdof1hbp4', title: 'Matton Curry Challenge with Friends 🍗', views: '50K' },
        ];

        return mockVideos.map((v, i) => ({
            id: v.id,
            title: v.title,
            link: `https://www.youtube.com/watch?v=${v.id}`,
            pubDate: new Date(Date.now() - (i * 86400000 * 5)).toISOString(),
            thumbnail: `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
            views: v.views
        }));
    }
}

function formatViews(views: string): string {
    const v = parseInt(views);
    if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
    if (v >= 1000) return (v / 1000).toFixed(1) + 'K';
    return views;
}
