import styled from '@emotion/styled'

const QuoteSectionSearchWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	position: relative;

	.quote-section--instantsearch-wrapper {
		border: 1px solid ${({theme}) => theme.palette.border.secondary} !important;
		max-height: 46px;
		position: relative;
		z-index: 2;
		& form {
			display: flex;
		}
	}

	.quote-section--instantsearch-input {
		width: 100%;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		padding: 11px 15px;
		color: ${({theme}) => theme.palette.text.primary};
		&:placeholder {
			color: ${({theme}) => theme.palette.text.placeholder};
		}
	}

	.quote-section--instantsearch-submit {
		padding: 11px 15px;
		background: transparent;

		& svg {
			width: 24px;
			height: 24px;
		}
	}
	.quote-section--instantsearch-reset {
		padding: 11px 15px;
		background: ${({theme}) => theme.palette.background.primary};
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		height: 100%;
		right: 0;
		top: 0;

		& svg {
			width: 14px;
			height: 14px;
		}
	}
	.quote-section--instantsearch-loading {
		display: none;
	}
`

export default QuoteSectionSearchWrapper
