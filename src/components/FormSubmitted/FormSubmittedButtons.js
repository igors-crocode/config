import styled from '@emotion/styled'

const FormSubmittedButtons = styled.div`
	display: flex;

	${({theme}) => theme.breakpoints.down('md')} {
		gap: 20px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		gap: 40px;
	}
`

export default FormSubmittedButtons
