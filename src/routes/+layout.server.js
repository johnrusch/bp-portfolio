import client from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

/**
 * @param {import("@sanity/image-url/lib/types/types").SanityImageSource} source
 */
function urlFor(source) {
	try {
		return builder.image(source).auto('format');
	} catch (error) {
		console.error("ERROR BUILDING IMAGE URL: ", error);
		return { url: '' };
	}
}

// Function to fetch and process items
/**
 * @param {string} type
 */
async function fetchItems(type) {
	try {
		const items = await client.fetch(`*[_type == "${type}"] | order(order asc)`);
	
		for (const item of items) {
			if (item.thumbnail) {
				if (item.thumbnail.asset) {
					item.thumbnail = urlFor(item.thumbnail).url();
				} else {
					console.log("No asset found for: ", item)
					delete item.thumbnail;
					console.log("Deleted thumbnail", item)
				}
				// item.thumbnail = urlFor(item.thumbnail).url();
			} else {
				console.log('No thumbnail found for', item._id)
			}
		}
	
		return items;
	} catch (error) {
		console.error("ERROR FETCHING ITEMS: ", error);
		return [];
	}
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
		console.error("ERROR LOADING ITEMS: ", error);
		return {
			status: 500,
			body: error.message
		};
	}
}
