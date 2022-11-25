import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

type Props = {
	text: string;
	href: string;
};

function NavLink({ text, href }: Props) {
	const router = useRouter();
	const isActive = href === router.pathname;

	return (
		<Link
			href={href}
			className={classNames(
				'block',
				isActive ? 'text-sub-title' : 'text-subtitle-1'
			)}
		>
			{text}
		</Link>
	);
}

export default NavLink;
