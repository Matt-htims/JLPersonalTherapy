module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			textGreen: {
				lightest: '#ECFBEE',
				light: '#2D6A4F',
				DEFAULT: '#1B4332',
				dark: '#081C15',
			},
			ctaGreen: {
				light: '#B7E4C7',
				DEFAULT: '#52B788',
			},
			back: {
				DEFAULT: '#FFFDFC',
				dark: '#FBF7F6',
			},
			black: '#000',
			gray: '#C2C2C2',
		},
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},
			spacing: {
				100: '28rem',
				128: '32rem',
				140: '44rem',
			},
			strokeWidth: {
				0.5: '0.5',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
