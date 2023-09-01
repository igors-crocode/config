import styled from '@emotion/styled'

const BackIcon = styled.span`
	width: 10px;
	height: 6px;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;

	&::before,
	&::after {
		content: '';
		position: absolute;
	}

	&::before {
		width: 6px;
		height: 6px;
		border-top: 2px solid ${({theme}) => theme.palette.text.primary};
		border-left: 2px solid ${({theme}) => theme.palette.text.primary};
		top: 0;
		left: 0;
		transform: rotate(-45deg);
	}

	&::after {
		width: 10px;
		height: 2px;
		background: ${({theme}) => theme.palette.text.primary};
	}
`

export default BackIcon
