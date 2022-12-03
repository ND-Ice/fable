import BagItemCard from '@/components/bag-item-card';
import BillInformation from '@/components/bill-information';
import useShoppingCart from '@/hooks/use-shopping-cart';
import DeliveryForm from './delivery-form';

function ItemsBag() {
	const { cartItems, deleteToCart, removeToCart, incrementCartItem } =
		useShoppingCart();

	const handleDeleteClicked = (id: string) => {
		if (!deleteToCart) return;
		deleteToCart(id);
	};

	const handleIncrementClicked = (id: string) => {
		if (!incrementCartItem) return;
		incrementCartItem(id);
	};

	const handleDecrementClicked = (id: string) => {
		if (!removeToCart) return;
		removeToCart(id);
	};

	return (
		<main className='mb-20 p-5 md:px-14'>
			<header className='mb-5'>
				<div className='flex items-center gap-5'>
					<h1 className='text-caption-2 font-bold'>Shopping Bag</h1>
					<div className='h-[2px] w-5 bg-secondary' />
					<h1 className='text-caption-2 font-bold'>Order</h1>
				</div>
			</header>
			{cartItems?.length !== 0 && (
				<div className='flex flex-col-reverse gap-14 lg:flex-row'>
					<DeliveryForm />
					<div className='grid h-max flex-1 grid-flow-row gap-5'>
						{cartItems?.map((cartItem) => (
							<BagItemCard
								key={cartItem.cartId}
								cartId={cartItem.cartId}
								productId={cartItem.productId}
								qty={cartItem.qty}
								size={cartItem.size}
								color={cartItem.color}
								onIncrementClick={handleIncrementClicked}
								onDecrementClick={handleDecrementClicked}
								onDeleteClick={handleDeleteClicked}
							/>
						))}
						<div className='mt-5 w-full'>
							<BillInformation />
						</div>
					</div>
				</div>
			)}

			{cartItems?.length === 0 && (
				<div className='mt-20 grid place-items-center gap-5'>
					<h1 className='text-title-lg-4'>Your Shopping bag is Empty.</h1>
					<button className='w-max border border-secondary px-10'>
						Go to shopping
					</button>
				</div>
			)}
		</main>
	);
}

export default ItemsBag;
