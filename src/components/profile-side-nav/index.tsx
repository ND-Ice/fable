import NavLink from './nav-link';

function ProfileSideNav() {
	return (
		<div className='w-full max-w-[300px] space-y-4'>
			<NavLink text='Main' href='/profile' />
			<NavLink text='Information' href='/profile/information' />
			<NavLink text='Order History' href='/profile/order-history' />
		</div>
	);
}

export default ProfileSideNav;
