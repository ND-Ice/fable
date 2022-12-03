import imageUrlBuilder from '@sanity/image-url';
import client from '@/config/sanity-config';

const builder = imageUrlBuilder(client);

const urlForImage = (source: string) => {
	if (!source) return '';

	return builder?.image(source)?.url();
};

export default urlForImage;
