import Link from 'next/link';

type Props = {
	text: string;
	path: string;
};

function NavLink({ text, path }: Props) {
	return (
		<Link href={path} className='text-headline text-secondary uppercase'>
			{text}
		</Link>
	);
}

export default NavLink;
