import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: "tun1nqnk",
    dataset: "production",
    apiVersion: "2022-08-21",
    useCdn: false
  });

export async function GET() {
    const data = await client.fetch(`*[_type == "item"]`);

    if (data) {
        return {
            status: 200,
            body: {
                items: data
            }
        };
    }
    return {
        status: 500,
        body: new Error("Something went wrong")
    };
}