// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import client from '@/config/sanity-config';
import type { NextApiRequest, NextApiResponse } from 'next';

const mySecureKey = process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { email, password } = req.body;

	const user = await client.fetch(`*[_type == 'user' && email == $email][0]`, {
		email,
	});

	if (!user)
		return res.status(404).send({ message: 'This user does not exist' });

	const validPassword = await bcrypt.compare(password, user.password);

	if (validPassword) {
		const authToken = jwt.sign(user, mySecureKey!);
		return res.status(200).send({ user, authToken });
	}

	return res.status(400).send({ message: 'Invalid Password' });
}
