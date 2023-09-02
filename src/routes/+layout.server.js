import client from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

/**
 * @param {import("@sanity/image-url/lib/types/types").SanityImageSource} source
 */
function urlFor(source) {
	return builder.image(source);
}

// Function to fetch and process items
/**
 * @param {string} type
 */
async function fetchItems(type) {
	const items = await client.fetch(`*[_type == "${type}"] | order(order asc)`);

	for (const item of items) {
		if (item.thumbnail) {
			item.thumbnail = urlFor(item.thumbnail).url();
		}
	}

	return items;
}

export async function load() {
	try {
		// Fetch all types of items in parallel
		const [videos, audio, live] = await Promise.all([
			fetchItems('video'),
			fetchItems('audio'),
			fetchItems('live')
		]);

		return {
			status: 200,
			body: {
				video: videos,
				audio: audio,
				live: live
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: error.message
		};
	}
}
