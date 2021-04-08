module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		container: {
			center: true
		},
		colors: {
			dark: {
				extra: '#574f4a',
				segment: '#272727',
				DEFAULT: '#303030',
				text: '#cccccc'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
