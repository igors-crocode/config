import styled from '@emotion/styled'

const QuoteSectionMessageText = styled.textarea`
	font-size: 16px;
	line-height: 150%;
	color: ${({theme}) => theme.palette.text.primary};
	border: 1px solid ${({theme}) => theme.palette.border.secondary} !important;
	padding: 10px;
	min-height: 220px;
	resize: none;

	&:placeholder {
		color: ${({theme}) => theme.palette.text.placeholder};
	}
`

export default QuoteSectionMessageText
