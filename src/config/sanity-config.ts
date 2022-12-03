import { createClient } from 'next-sanity';

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_DATASET,
	apiVersion: '1',
	useCdn: false,
});

export default client;
