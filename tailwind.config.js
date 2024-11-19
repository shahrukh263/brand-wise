module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '280px',
			},
			colors: {
				primary: '#6962FB',
				'light-primary': '#C3C1FD',
				'dark-gray': '#343A40',
				'light-gray': '#495057',
			},
		},
	},
	plugins: [],
};
