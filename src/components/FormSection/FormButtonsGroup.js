import styled from '@emotion/styled'

const FormButtonsGroup = styled.div`
	display: grid;
	padding-top: 9px;
	max-width: 400px;

	${({theme}) => theme.breakpoints.down('sm')} {
		gap: 10px;
	}

	${({theme}) => theme.breakpoints.up('sm')} {
		gap: 20px;
		grid-template-columns: 1fr 1fr;
	}
`

export default FormButtonsGroup
