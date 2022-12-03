import * as Yup from 'yup';

const addToCartSchema = Yup.object().shape({
	size: Yup.string().required().label('Size'),
	color: Yup.string().required().label('Color'),
});

export default addToCartSchema;
