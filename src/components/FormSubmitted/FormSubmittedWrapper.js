import styled from '@emotion/styled'

const FormSubmittedWrapper = styled.section`
	background-color: ${({theme}) => theme.palette.background.secondary};
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	gap: 20px;

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 40px 10px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 40px;
	}
`

export default FormSubmittedWrapper
