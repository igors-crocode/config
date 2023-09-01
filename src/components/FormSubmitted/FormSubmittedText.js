import styled from '@emotion/styled'

const FormSubmittedText = styled.p`
	font-weight: 400;
	line-height: 150%;
	text-align: center;
	color: ${({theme}) => theme.palette.text.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 18px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 20px;
		max-width: 560px;
	}
`

export default FormSubmittedText
