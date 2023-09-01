import styled from '@emotion/styled'
import {Highlight} from 'react-instantsearch-hooks-web'

const QuoteSectionHitItemWrapper = styled.article`
	border: 1px solid ${({theme}) => theme.palette.border.primary} !important;
	padding: 10px;
	gap: 10px;

	${({theme}) => theme.breakpoints.down('sm')} {
		display: flex;
		align-items: center;
	}

	${({theme}) => theme.breakpoints.up('sm')} {
		display: grid;
		min-height: 270px;
	}
`
const QuoteSectionHitItemContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;

	${({theme}) => theme.breakpoints.down('sm')} {
		flex: 0 0 calc(55% - 5px);
	}
`

const QuoteSectionHitItemImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 0;

	${({theme}) => theme.breakpoints.down('sm')} {
		padding-bottom: 50%;
		flex: 0 0 calc(45% - 5px);
	}

	${({theme}) => theme.breakpoints.up('sm')} {
		padding-bottom: 100%;
	}
`

const QuoteSectionHitItemImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: scale-down;
	position: absolute;
`

const QuoteSectionHitItemTitle = styled.h3`
	font-size: 14px;
	line-height: 150%;
	font-weight: 400;
	color: ${({theme}) => theme.palette.text.primary};
`

const QuoteSectionHitItemSKU = styled.span`
	font-weight: 600;
	font-size: 14px;
	line-height: 150%;
	color: ${({theme}) => theme.palette.text.primary};
`

const QuoteSectionHitItemButton = styled.span`
	font-weight: 400;
	font-size: 14px;
	line-height: 100%;
	background: #f0ca0c;
	padding: 10px;
	text-align: center;
	color: ${({theme}) => theme.palette.text.primary};
	cursor: pointer;
`

const QuoteSectionHitItem = ({hit, handle}) => {
	const QuoteWidgetConfig = window.QuoteWidgetConfig
	return (
		<QuoteSectionHitItemWrapper onClick={() => handle(hit)}>
			<QuoteSectionHitItemImageWrapper>
				<QuoteSectionHitItemImage
					src={
						hit[QuoteWidgetConfig.productImage]
							? `${QuoteWidgetConfig.productImageTemplate}${
									hit[QuoteWidgetConfig.productImage]
							  }`
							: QuoteWidgetConfig.productImagePlaceholder
					}
					alt={hit[QuoteWidgetConfig.productTitle]}
				/>
			</QuoteSectionHitItemImageWrapper>
			<QuoteSectionHitItemContent>
				<QuoteSectionHitItemTitle>
					<Highlight hit={hit} attribute={QuoteWidgetConfig.productTitle} />
				</QuoteSectionHitItemTitle>
				<QuoteSectionHitItemSKU>
					SKU: <Highlight hit={hit} attribute={QuoteWidgetConfig.productSKU} />
				</QuoteSectionHitItemSKU>
				<QuoteSectionHitItemButton>Add to Quote</QuoteSectionHitItemButton>
			</QuoteSectionHitItemContent>
		</QuoteSectionHitItemWrapper>
	)
}

export default QuoteSectionHitItem
