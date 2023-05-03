import client from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);


function urlFor(source) {
	return builder.image(source);
}

export async function GET() {
	const videos = await client.fetch(`*[_type == "video"] | order(order asc)`);
	const audio = await client.fetch(`*[_type == "audio"] | order(order asc)`);
	const live = await client.fetch(`*[_type == "live"] | order(order asc)`);
	const design = await client.fetch(`*[_type == "design"] | order(order asc)`);

	for (const item of design) {
		item.image = urlFor(item.thumbnail).auto("format").url();
		item.thumbnail = urlFor(item.thumbnail).width(300).url();
	}

	for (const item of videos) {
		if (item.thumbnail) {
			item.thumbnail = urlFor(item.thumbnail).width(300).url();
		}
	}

	for (const item of audio) {
		item.thumbnail = urlFor(item.thumbnail).width(300).url();
	}

	if (videos && audio && live && design) {
		return {
			status: 200,
			body: {
				Video: videos,
				Audio: audio,
				Live: live,
				Design: design
			}
		};
	}
	return {
		status: 500,
		body: new Error('Something went wrong')
	};
}
