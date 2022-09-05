import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: "tun1nqnk",
    dataset: "production",
    apiVersion: "2022-08-21",
    useCdn: false
  });

export async function GET() {
    const videos = await client.fetch(`*[_type == "video"] | order(order asc)`);
    const audio = await client.fetch(`*[_type == "audio"] | order(order asc)`);
    const live = await client.fetch(`*[_type == "live"] | order(order asc)`);

    if (videos && audio && live) {
        return {
            status: 200,
            body: {
                "Video": videos,
                "Audio": audio,
                "Live": live
            }
        };
    }
    return {
        status: 500,
        body: new Error("Something went wrong")
    };
}