import * as Yup from 'yup';

import sizes from '@/data/sizes';
import colors from '@/data/colors';

const addToCartSchema = Yup.object().shape({
	size: Yup.string()
		.oneOf([...sizes])
		.required()
		.label('Size'),
	color: Yup.string()
		.oneOf([...colors])
		.required()
		.label('Color'),
});

export default addToCartSchema;
