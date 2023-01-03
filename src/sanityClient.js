import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'tun1nqnk',
	dataset: 'production',
	apiVersion: '2022-08-21',
	useCdn: true
});

export default client;
