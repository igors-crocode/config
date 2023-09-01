import styled from '@emotion/styled'

const FormErrorWrapper = styled.div`
	padding: 10px 20px;
	width: 100%;
	max-width: 400px;
	background: #ffcccc;
	transition: 0.5s;
	overflow: hidden;

	${({showError}) =>
		showError
			? `
		margin-bottom: 20px;
    `
			: `
    visibility: hidden;
    opacity: 0;
    height: 0;
    padding: 0;
	margin-bottom: 0;
    `}
`

export default FormErrorWrapper
