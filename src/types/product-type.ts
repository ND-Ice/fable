import ColorType from './color-type';

type ProductType = {
	_id: string;
	images: string[];
	name: string;
	description?: string;
	price: number;
	colors: ColorType[];
	sizes: string[];
	stock: number;
};

export default ProductType;
