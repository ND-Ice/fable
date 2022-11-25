import Link from 'next/link';

type Props = {
	text: string;
	path: string;
};

function NavBottomLink({ text, path }: Props) {
	return (
		<Link
			href={path}
			className='text-caption-1 block text-white whitespace-nowrap'
		>
			{text}
		</Link>
	);
}

export default NavBottomLink;
