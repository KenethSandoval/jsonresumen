export default {
	fields: [
		// Network
		{
			type: 'input',
			inputType: 'text',
			placeholder: 'Twitter',
			label: 'Network',
			model: 'network',
			styleClasses: ['col-md-4', 'p-0', 'px-md-1']
		},
		{
			type: 'input',
			inputType: 'text',
			placeholder: 'https://twitter.com/user',
			label: 'URL',
			model: 'url',
			styleClasses: ['col-md-4', 'p-0', 'px-md-1']
		},
		{
			type: 'input',
			inputType: 'text',
			placeholder: 'yourname',
			label: 'Username',
			model: 'username',
			styleClasses: ['col-md-4', 'p-0', 'px-md-1']
		},
	],
};
