// import client from "../sanityClient";
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//     return builder.image(source);
// } 

// // Function to fetch and process items
// async function fetchItems(type) {
//     const items = await client.fetch(`*[_type == "${type}"] | order(order asc)`);
    
//     for (const item of items) {
//         if (item.thumbnail) {
//             item.thumbnail = urlFor(item.thumbnail).width(300).url();
//         }
//     }

//     return items;
// }

// export async function load() {
//     try {
//         // Fetch all types of items in parallel
//         const [videos, audio, live, design] = await Promise.all([
//             fetchItems("video"),
//             fetchItems("audio"),
//             fetchItems("live"),
//             fetchItems("design"),
//         ]);

//         return {
//             status: 200,
//             body: {
//                 Video: videos,
//                 Audio: audio,
//                 Live: live,
//                 Image: design
//             }
//         };
//     } catch (error) {
//         return {
//             status: 500,
//             body: error.message
//         };
//     }
// }