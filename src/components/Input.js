import styled from '@emotion/styled'

const InputWrapper = styled.label`
	display: grid;
	gap: 5px;
`

const InputTitle = styled.div`
	font-size: 16px !important;
	line-height: 150%;
	display: flex;
	gap: 3px !important;
	color: ${({theme}) => theme.palette.text.primary};

	${({required, theme}) =>
		required
			? `
	&:after {
		content: '*';
		color: ${theme.palette.inputMarker};
	}
	`
			: ''}
`

const InputField = styled.input`
	padding: 11px 15px !important;
	gap: 15px !important;
	width: 100%;
	max-width: 400px !important;
	color: ${({theme}) => theme.palette.text.primary}!important;
	border: 1px solid ${({theme}) => theme.palette.border.secondary}!important;
	& + span {
		opacity: 0;
	}

	&:not(:invalid) {
		border: 1px solid ${({theme}) => theme.palette.border.secondary}!important;

		& + span {
			opacity: 0;
		}
	}

	&:invalid:not(:placeholder-shown) {
		border: 1px solid #d60000 !important;
		& + span {
			opacity: 1;
		}
	}

	&::placeholder {
		color: ${({theme}) => theme.palette.text.placeholder}!important;
	}
`

const InputErrorMessage = styled.span`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 12px;
	line-height: 150%;
	color: #d60000;
	transition: 0.3s;
`

const Input = ({
	placeholder,
	name,
	label,
	value,
	handle,
	required,
	errorMsg,
	...props
}) => {
	return (
		<InputWrapper>
			<InputTitle required={required}>{label}</InputTitle>
			<InputField
				onChange={handle}
				placeholder={placeholder}
				value={value}
				name={name}
				required={required}
				{...props}
			/>
			<InputErrorMessage>{errorMsg}</InputErrorMessage>
		</InputWrapper>
	)
}
export default Input
