import styled from '@emotion/styled'

const SideBarCloseIcon = styled.button`
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background: transparent;

	&::before,
	&::after {
		content: '';

		${({theme}) => theme.breakpoints.down('md')} {
			width: 30px;
		}

		${({theme}) => theme.breakpoints.up('md')} {
			width: 40px;
		}

		height: 2px;
		display: block;
		position: absolute;
		background-color: ${({theme}) => theme.palette.text.primary};
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
`

export default SideBarCloseIcon
