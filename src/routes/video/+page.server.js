// import client from "../../sanityClient";
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//     return builder.image(source);
// } 

// export async function load() {
//     try {
//         const items = await client.fetch(`*[_type == "video"] | order(order asc)`);

//         for (const item of items) {
//             if (item.thumbnail) {
//                 item.thumbnail = urlFor(item.thumbnail).width(300).url();
//             }
//         }
        
//         return {
//             status: 200,
//             body: items
//         };
//     } catch (error) {
//         return {
//             status: 500,
//             body: error.message
//         };
//     }
// }