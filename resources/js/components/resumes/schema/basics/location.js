export default {
	fields: [
		// Location
		{
			type: 'input',
			inputType: 'text',
			placeholder: '2712 Brodway st',
			label: 'Location',
			model: 'location',
			styleClasses: ['col-md-4', 'p-0', 'px-md-1']
		},
		// Postal Code
		{
			type: 'input',
			inputType: 'text',
			placeholder: 'CA 94115',
			label: 'Postal Code',
			model: 'postalCode',
			styleClasses: ['col-md-4', 'p-0', 'px-md-1']
		},
		// City
		{
			type: 'input',
			inputType: 'text',
			placeholder: 'San Francisco',
			label: 'City',
			model: 'city',
			styleClasses: ['col-md-4', 'p-0', 'px-md-1']
		},
		// Country code
		{
			type: 'input',
			inputType: 'text',
			placeholder: 'California',
			label: 'Country code',
			model: 'countryCode',
			styleClasses: ['col-md-4', 'p-0', 'px-md-1']
		},
		// Region
		{
			type: 'input',
			inputType: 'text',
			placeholder: 'California',
			label: 'Region',
			model: 'region',
			styleClasses: ['col-md-4', 'p-0', 'px-md-1']
		},
	],
};
