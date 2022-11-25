function RecentOrdersTable() {
	return (
		<>
			<header className='text-foot-note'>Recent Orders</header>
			<div className='overflow-x-auto relative'>
				<table className='w-full text-sm text-left text-gray-500'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
						<tr>
							<th scope='col' className='py-3 px-6'>
								Number
							</th>
							<th scope='col' className='py-3 px-6'>
								Order
							</th>
							<th scope='col' className='py-3 px-6'>
								Date
							</th>
							<th scope='col' className='py-3 px-6'>
								Summary
							</th>
							<th scope='col' className='py-3 px-6'>
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className='bg-white'>
							<td
								scope='row'
								className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
							>
								849234
							</td>
							<td className='py-4 px-6'>
								Jacket KLS Black M, Trousers KLS Black M, Shirt KLS White M
							</td>
							<td className='py-4 px-6'>20.09.2022</td>
							<td className='py-4 px-6'>€180</td>
							<td className='py-4 px-6'>Paid</td>
						</tr>
						<tr className='bg-white'>
							<td
								scope='row'
								className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
							>
								835012
							</td>
							<td className='py-4 px-6'>
								Short KLS Graphite S, Jacket KLS Graphite M
							</td>
							<td className='py-4 px-6'>03.11.2021</td>
							<td className='py-4 px-6'>€340</td>
							<td className='py-4 px-6'>Delivered</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export default RecentOrdersTable;
