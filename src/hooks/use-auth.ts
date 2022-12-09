import axios from 'axios';
import toast from 'react-hot-toast';

export const useRegister = () => {
	const registerUser = async (user: any) => {
		try {
			const { data } = await axios.post('/api/sign-up', user);
			console.log(data);
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
		}
	};
	return { registerUser };
};

export const useSignIn = () => {
	const signIn = async (user: any) => {
		try {
			const { data } = await axios.post('/api/sign-in', user);
			console.log(data);
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
		}
	};

	return { signIn };
};
