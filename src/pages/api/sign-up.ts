import client from '@/config/sanity-config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

const mySecureKey = process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { email, password } = req.body;

	const isExist = await client.fetch(
		`*[_type == 'user' && email == $email][0]`,
		{ email }
	);

	if (isExist)
		return res.status(400).send({ message: 'This Email is already exist' });

	const salt = 10;
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await client.create({
		_type: 'user',
		email,
		password: hashedPassword,
	});

	if (mySecureKey) {
		const authToken = jwt.sign(user, mySecureKey);
		return res.status(200).send({ user, authToken });
	}
}
