import styled from '@emotion/styled'

const FormText = styled.p`
	line-height: 150%;
	margin-bottom: 20px !important;
	color: ${({theme}) => theme.palette.text.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 18px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 20px;
	}
`

export default FormText
