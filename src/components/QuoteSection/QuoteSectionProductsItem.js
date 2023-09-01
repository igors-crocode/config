import styled from '@emotion/styled'
import DeleteIcon from '../DeleteIcon'

const QuoteSectionProductsItemWrapper = styled.article`
	display: flex;

	border-top: 1px solid ${({theme}) => theme.palette.border.primary}!important;
	border-left: 1px solid ${({theme}) => theme.palette.border.primary}!important;
	border-right: 1px solid ${({theme}) => theme.palette.border.primary}!important;

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 10px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 20px;
	}

	&:last-child {
		border-bottom: 1px solid ${({theme}) => theme.palette.border.primary}!important;
	}
`

const QuoteSectionProductsItemContent = styled.div`
	width: 100%;

	${({theme}) => theme.breakpoints.down('md')} {
		display: grid;
		gap: 10px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}
`

const QuoteSectionProductsItemDataColumn = styled.div`
	display: flex;
	justify-content: space-between;

	${({theme}) => theme.breakpoints.down('md')} {
		width: 100%;
		gap: 10px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		max-width: 392px;
		gap: 20px;
	}
`

const QuoteSectionProductsItemQuantityColumn = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

	${({theme}) => theme.breakpoints.up('md')} {
		max-width: 348px;
	}
`

const QuoteSectionProductsItemDetails = styled.div`
	display: grid;
	gap: 10px;
	grid-template-rows: max-content;
	height: 100%;

	${({theme}) => theme.breakpoints.down('sm')} {
		width: 100%;
	}

	${({theme}) => theme.breakpoints.up('sm')} {
		width: 200px;
	}
`

const QuoteSectionProductsItemImage = styled.img`
	color: ${({theme}) => theme.palette.text.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		width: 80px;
		flex-shrink: 0;
		height: 80px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		width: 130px;
		height: 130px;
	}
`

const QuoteSectionProductsItemTitle = styled.h3`
	font-size: 16px;
	line-height: 150%;
	font-weight: 400;
	color: ${({theme}) => theme.palette.text.primary};
`

const QuoteSectionProductsItemSku = styled.span`
	font-size: 14px;
	line-height: 150%;
	color: ${({theme}) => theme.palette.text.tertiary};
`

const QuoteSectionProductsItemQuantityWrapper = styled.div`
	display: flex;
	border: 1px solid ${({theme}) => theme.palette.border.primary} !important;
	height: 46px;
	align-items: center;
`

const QuoteSectionProductsItemQuantityButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 46px;
	height: 46px;
	position: relative;
	background: transparent;

	&::before {
		position: absolute;
		content: '';
		display: block;
		width: 16px;
		height: 2px;
		background-color: ${({theme}) => theme.palette.text.primary};
	}

	${({variant, theme}) =>
		variant === 'plus'
			? `
		&::after {
			content: '';
			position: absolute;
			display: block;
			width: 16px;
			height: 2px;
			transform: rotate(90deg);
			background-color: ${theme.palette.text.primary};
	}
	`
			: null}
`

const QuoteSectionProductsItemQuantityText = styled.input`
	font-size: 18px;
	line-height: 150%;
	height: 100%;
	width: 70px;
	text-align: center !important;
	border-right: 1px solid ${({theme}) => theme.palette.border.primary} !important;
	border-left: 1px solid ${({theme}) => theme.palette.border.primary} !important;
`

const QuantitySectionProductsItemRemoveButton = styled.button`
	width: 36px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
`

const QuoteSectionProductsItem = ({
	product: {image, name, sku, quantity},
	handleRemove,
	handleChangeQuantity,
	handleChangeQuantityInput
}) => {
	const changeHandler = (e) => {
		handleChangeQuantityInput(sku, e.target.value)
	}
	return (
		<QuoteSectionProductsItemWrapper>
			<QuoteSectionProductsItemContent>
				<QuoteSectionProductsItemDataColumn>
					<QuoteSectionProductsItemImage src={image} />
					<QuoteSectionProductsItemDetails>
						<QuoteSectionProductsItemTitle>
							{name}
						</QuoteSectionProductsItemTitle>
						<QuoteSectionProductsItemSku>
							SKU: {sku}
						</QuoteSectionProductsItemSku>
					</QuoteSectionProductsItemDetails>
				</QuoteSectionProductsItemDataColumn>
				<QuoteSectionProductsItemQuantityColumn>
					<QuoteSectionProductsItemQuantityWrapper>
						<QuoteSectionProductsItemQuantityButton
							onClick={() => handleChangeQuantity(sku, '-1')}
						/>
						<QuoteSectionProductsItemQuantityText
							onChange={changeHandler}
							value={quantity}
						/>
						<QuoteSectionProductsItemQuantityButton
							onClick={() => handleChangeQuantity(sku, '+1')}
							variant='plus'
						/>
					</QuoteSectionProductsItemQuantityWrapper>
					<QuantitySectionProductsItemRemoveButton
						onClick={() => {
							handleRemove(sku)
						}}
					>
						<DeleteIcon />
					</QuantitySectionProductsItemRemoveButton>
				</QuoteSectionProductsItemQuantityColumn>
			</QuoteSectionProductsItemContent>
		</QuoteSectionProductsItemWrapper>
	)
}

export default QuoteSectionProductsItem
