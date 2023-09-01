import styled from '@emotion/styled'

const QuoteSectionBottom = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 44px;
	position: sticky;
	z-index: 1;
	bottom: 15px;
	background-color: ${({theme}) => theme.palette.background.primary};
	&::before {
		background-color: ${({theme}) => theme.palette.background.primary};
		content: '';
		width: 100%;
		height: 65px;
		position: absolute;
		top: 0;
	}
	& button {
		white-space: nowrap;
		z-index: 1;
	}
`

export default QuoteSectionBottom
