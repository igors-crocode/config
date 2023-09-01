import styled from '@emotion/styled'

const Button = styled.button`
	-webkit-appearance: none;
	appearance: none;
	vertical-align: middle;
	color: inherit;
	font: inherit;
	background: transparent;
	margin: 0;
	border-radius: 0;
	text-align: inherit;
	text-transform: inherit;
	box-sizing: border-box;
	border-style: solid;
	border-width: 0;
	font-family: ${({theme}) => theme.typography.fontFamily};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 13px 40px !important;
	font-size: 16px !important;
	gap: 9px;

	&:disabled {
		pointer-events: none;
	}

	${({variant, colored, theme}) => `
	${
		variant === 'outlined'
			? `
			border: 1px solid ${theme.palette.button.outlined.border} !important;
			color: ${({theme}) => theme.palette.button.outlined.text} !important;
	`
			: ''
	}
	${
		variant === 'solid'
			? `
			background-color: ${
				colored
					? theme.palette.button.solid.colored.background
					: theme.palette.button.solid.black.background
			}!important;
			color: ${
				colored
					? theme.palette.button.solid.colored.text
					: theme.palette.button.solid.black.text
			}!important;
	`
			: ''
	}
	`}
`

export default Button
