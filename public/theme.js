window.QuoteWidgetTheme = {
	breakpoints: {
		values: {
			sm: 420,
			md: 768,
			lg: 992,
			xl: 1440,
			'2xl': 1920
		},
		up(key) {
			return `@media (min-width: ${this.values[key]}px)`
		},
		down(key) {
			return `@media (max-width: ${this.values[key] - 0.02}px)`
		},
		between(min, max) {
			return `@media (min-width: ${this.values[min]}px) and (max-width: ${
				this.values[max] - 0.02
			}px)`
		}
	},
	palette: {
		text: {
			primary: '#000',
			secondary: '#fff',
			tertiary: '#767676',
			placeholder: '#767676'
		},
		background: {
			primary: '#fff',
			secondary: '#f6f6f6'
		},
		border: {
			primary: '#767676',
			secondary: '#000'
		},
		inputMarker: '#d60000',
		button: {
			outlined: {
				text: '#000',
				border: '#000'
			},
			solid: {
				black: {
					text: '#fff',
					background: '#000'
				},
				colored: {
					text: '#000',
					background: '#F0CA0C'
				}
			}
		}
	},
	typography: {
		rootFontSize: 16,
		pxToRem(value) {
			return `${(value / this.rootFontSize).toFixed(3)}rem`
		},
		fontFamily: `Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
		fontWeight: {
			regular: 400,
			medium: 500
		},
		fontSize: {
			title1: 40,
			title2: 32,
			title3: 28,
			subtitle1: 20,
			subtitle2: 18,
			placeholder: 16
		}
	}
}
