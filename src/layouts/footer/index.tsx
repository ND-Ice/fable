import NavBottom from './nav-bottom';
import Subscribe from './subscribe';

function Footer() {
	return (
		<div className='bg-secondary p-5 py-10 space-y-12 lg:space-y-0 md:px-14 lg:flex lg:flex-row-reverse lg:gap-10 lg:justify-between'>
			<Subscribe />
			<NavBottom />
		</div>
	);
}

export default Footer;
