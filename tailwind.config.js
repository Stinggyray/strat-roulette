const colors = require('tailwindcss/colors')

let grayColors = colors.gray;

//grayColors[700] = "#2c2f33"

// Reject modernity, return to AMOLED
//grayColors[700] = "#111111"
//grayColors[800] = "#000000"

module.exports = {
	mode: 'jit',
	purge: [
		'./views/**/*.hbs',
		'./static/**/*.js',
		'./**/*.js'
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			'sans': 'Segoe UI'
		},
		borderWidth: {
			'1': '1px',
			'2': '2px',
			'4': '4px'
		},
		extend: {
			colors: {
				gray: grayColors, //colors.gray //colors.trueGray
				yellow: colors.amber,
				lime: colors.lime,
				orange: colors.orange
			},
		},
	},
	variants: {
		extend: {

		},
	},
	plugins: [

	],
}
