import styled from '@emotion/styled'
import {useHits, useInstantSearch} from 'react-instantsearch-hooks-web'
import QuoteSectionHitItem from './QuoteSectionHitItem'
import {useEffect, useState} from 'react'

const QuoteSectionHitsBackdrop = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 1;
`

const QuoteSectionHitsWrapper = styled.div`
	width: 100%;
	position: absolute;
	display: grid;
	max-height: 70vh;
	top: 48px;
	overflow: auto;
	z-index: 2;
	background-color: ${({theme}) => theme.palette.background.secondary};

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 15px 10px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 25px 20px;
	}
	gap: 25px;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15), 0px 0px 20px rgba(0, 0, 0, 0.15);
`

const QuoteSectionHitsAllResults = styled.span`
	font-size: 16px;
	line-height: 150%;
	color: ${({theme}) => theme.palette.text.tertiary};
`

const QuoteSectionHitsStack = styled.div`
	width: 100%;
	display: grid;

	top: 88px;
	gap: 20px;

	${({theme}) => theme.breakpoints.between('sm', 'md')} {
		grid-template-columns: 1fr 1fr 1fr;
	}

	${({theme}) => theme.breakpoints.between('md', 'lg')} {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
`

const QuoteSectionHits = ({isActive, handleAddProduct, backdropHandle}) => {
	const QuoteWidgetConfig = window.QuoteWidgetConfig
	const {hits, results} = useHits()

	return isActive && results.query.length >= 3 ? (
		<>
			<QuoteSectionHitsBackdrop onClick={() => backdropHandle()} />
			<QuoteSectionHitsWrapper>
				<QuoteSectionHitsAllResults>
					{hits.length} results found
				</QuoteSectionHitsAllResults>
				<QuoteSectionHitsStack>
					{hits.map((hit) => (
						<QuoteSectionHitItem
							handle={handleAddProduct}
							key={hit[QuoteWidgetConfig.productSKU]}
							hit={hit}
						/>
					))}
				</QuoteSectionHitsStack>
			</QuoteSectionHitsWrapper>
		</>
	) : null
}

export default QuoteSectionHits
