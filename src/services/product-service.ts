import client from '@/config/sanity-config';

const fetchProducts = () => client.fetch(`*[_type == 'product']`);
const fetchProductById = (id: string) =>
	client.fetch(`*[_type == 'product' && _id == $id][0]`, { id });

const productService = {
	fetchProducts,
	fetchProductById,
};

export default productService;
