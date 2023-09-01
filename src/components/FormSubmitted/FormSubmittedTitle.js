import styled from '@emotion/styled'

const FormSubmittedTitle = styled.h2`
	font-weight: 500;
	line-height: 150%;
	color: ${({theme}) => theme.palette.text.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 28px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 32px;
	}
`

export default FormSubmittedTitle
