import React from 'react';

function Subscribe() {
	return (
		<div className='space-y-4 lg:min-w-[500px]'>
			<label className='text-cation-1 text-white'>
				We give you a 10% discount for subscription
			</label>
			<div className='flex flex-col gap-4 md:flex-row'>
				<input
					type='text'
					placeholder='Enter your Email'
					className='border-white text-white'
				/>
				<button className='lg:w-max lg:px-10'>Subscribe</button>
			</div>
		</div>
	);
}

export default Subscribe;
