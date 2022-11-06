import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "tun1nqnk",
    dataset: "production",
    apiVersion: "2022-08-21",
    useCdn: false
  });

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export async function GET() {
    const videos = await client.fetch(`*[_type == "video"] | order(order asc)`);
    const audio = await client.fetch(`*[_type == "audio"] | order(order asc)`);
    const live = await client.fetch(`*[_type == "live"] | order(order asc)`);
    const design = await client.fetch(`*[_type == "design"] | order(order asc)`);

    for (const item of audio) {
        item.thumbnail = urlFor(item.thumbnail).url();
    }

    for (const item of design) {
        item.thumbnail = urlFor(item.thumbnail).url();
    }

    if (videos && audio && live) {
        return {
            status: 200,
            body: {
                "Video": videos,
                "Audio": audio,
                "Live": live,
                "Design": design
            }
        };
    }
    return {
        status: 500,
        body: new Error("Something went wrong")
    };
}