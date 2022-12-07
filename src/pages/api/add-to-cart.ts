// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@/config/sanity-config';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { product, color, size, quantity } = req.body;

	const isExist = await client.fetch(
		`*[_type == 'cart' && references($product) && color == $color && size == $size][0]`,
		{ product: product?._ref, color, size }
	);

	if (isExist) {
		const updated = await client
			.patch(isExist?._id)
			.inc({ quantity: quantity })
			.commit();

		return res.status(200).send({ ...updated });
	}

	const created = await client.create({
		_type: 'cart',
		product,
		color,
		size,
		quantity,
	});

	return res.status(200).send({ ...created });
}
