const formatToCurrency = (value: number, format: string = 'PHP') => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: format,
		maximumFractionDigits: 0,
	});

	return formatter.format(value);
};

export default formatToCurrency;
