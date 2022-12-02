import useShoppingCart from '@/hooks/use-shopping-cart';
import AppLogo from '@/components/app-logo';
import NavLink from './nav-link';

function Header() {
	const { cartItems } = useShoppingCart();
	const itemsCount = cartItems?.length ? `(${cartItems.length})` : '';

	return (
		<header className='sticky top-0 z-50 bg-white'>
			<nav className='flex justify-between gap-5 p-5 md:px-14'>
				<div className='hidden lg:inline-block'>
					<AppLogo />
				</div>
				<div className='space-x-5 md:block'>
					<NavLink text='Collections' path='/collections' />
					<NavLink text='Sale' path='/sale' />
				</div>
				<div className='space-x-5'>
					<NavLink text={`Items${itemsCount}`} path='/items-bag' />
					<NavLink text='Profile' path='/profile' />
				</div>
			</nav>
		</header>
	);
}

export default Header;
