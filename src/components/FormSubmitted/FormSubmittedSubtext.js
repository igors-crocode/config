import styled from '@emotion/styled'

const FormSubmittedSubtext = styled.p`
	font-weight: 500;
	line-height: 150%;
	text-align: center;
	color: ${({theme}) => theme.palette.text.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 18px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 20px;
	}
`

export default FormSubmittedSubtext
