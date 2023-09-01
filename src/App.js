import {ThemeProvider, Global} from '@emotion/react'
import {useEffect, useState} from 'react'
import algoliasearch from 'algoliasearch/lite'
import {InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import {destyle} from './styles/destyle'
import {createPortal} from 'react-dom'

import {
	Input,
	Button,
	BackIcon,
	SideBarWrapper,
	SideBarBackdrop,
	SideBarTitle,
	SideBarContent,
	SideBarInnerContent,
	SideBarCloseIcon,
	SideBarHeading,
	QuoteSectionWrapper,
	QuoteSectionProductsStack,
	QuoteSectionProductsItem,
	QuoteSectionEmptyText,
	QuoteSectionEmptyTitle,
	QuoteSectionEmptyWrapper,
	QuoteSectionSearchWrapper,
	QuoteSectionHits,
	QuoteSectionMessageText,
	QuoteSectionMessageLabel,
	QuoteSectionMessageWrapper,
	QuoteSectionBottom,
	FormWrapper,
	FormTitle,
	FormText,
	FormButtonsGroup,
	FormSectionWrapper,
	FormSubmittedButtons,
	FormSubmittedSubtext,
	FormSubmittedText,
	FormSubmittedTitle,
	FormErrorText,
	FormErrorWrapper,
	FormSubmittedWrapper
} from './components'

const QuoteWidgetTheme = window.QuoteWidgetTheme
const QuoteWidgetConfig = window.QuoteWidgetConfig

const searchClient = algoliasearch(
	QuoteWidgetConfig?.algoliaAppID,
	QuoteWidgetConfig?.algoliaKey
)

const initialFormData = {
	message: '',
	name: '',
	email: '',
	phone: '',
	company: ''
}

const STORAGE_KEY = QuoteWidgetConfig?.storageKey

function App() {
	const [showFieldsError, setShowFieldsError] = useState(false)
	const [showError, setShowError] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const [currentStage, setCurrentStage] = useState(1)
	const [selectedProducts, setSelectedProducts] = useState([])
	const [initialized, setInitialized] = useState(null)
	const [formData, setFormData] = useState(initialFormData)

	const handleChangeForm = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	const handleOpenSidebar = () => {
		setIsOpen(true)
	}

	const handleCloseSidebar = () => {
		setIsOpen(false)
	}

	const handleSelectStage = (idx) => {
		setCurrentStage(idx)
	}

	const handleFocus = () => (!isActive ? setIsActive(true) : null)

	const handleBlur = () => (isActive ? setIsActive(false) : null)

	const queryHook = (query, search) => {
		if (!isActive) {
			handleFocus()
		}
		search(query)
	}

	const handleAddProduct = (product) => {
		document.querySelector('.quote-section--instantsearch-reset').click()
		const existedProduct = selectedProducts.find(
			(el) => el.sku === product[QuoteWidgetConfig.productSKU]
		)
		if (existedProduct) {
			handleBlur()
			return handleChangeQuantity(product[QuoteWidgetConfig.productSKU], +1)
		}
		setSelectedProducts([
			...selectedProducts,
			{
				sku: product[QuoteWidgetConfig.productSKU],
				name: product[QuoteWidgetConfig.productTitle],
				image: product[QuoteWidgetConfig.productImage]
					? `${QuoteWidgetConfig.productImageTemplate}${
							product[QuoteWidgetConfig.productImage]
					  }`
					: QuoteWidgetConfig.productImagePlaceholder,
				quantity: 1
			}
		])

		handleBlur()
	}

	const handleChangeQuantity = (sku, count) => {
		const productIdx = selectedProducts.findIndex((el) => el.sku === sku)
		const editedProduct = selectedProducts[productIdx]
		if (!count) return null
		return editedProduct.quantity === 1 && +count === -1
			? null
			: setSelectedProducts([
					...selectedProducts.slice(0, productIdx),
					{...editedProduct, quantity: editedProduct.quantity + +count},
					...selectedProducts.slice(productIdx + 1)
			  ])
	}

	const handleChangeQuantityInput = (sku, value) => {
		const productIdx = selectedProducts.findIndex((el) => el.sku === sku)
		const editedProduct = selectedProducts[productIdx]
		return setSelectedProducts([
			...selectedProducts.slice(0, productIdx),
			{...editedProduct, quantity: +value > 1 ? +value : 1},
			...selectedProducts.slice(productIdx + 1)
		])
	}

	const handleRemoveFromCart = (sku) => {
		setSelectedProducts([...selectedProducts.filter((el) => el.sku !== sku)])
	}

	const handleClearQuote = () => {
		setSelectedProducts([])
		setFormData(initialFormData)
		localStorage.removeItem(STORAGE_KEY)
	}

	const handleSubmitQuote = async () => {
		if (
			!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email) ||
			formData.name.length < 3 ||
			!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
				formData.phone
			)
		) {
			setShowFieldsError(true)
			setTimeout(() => setShowFieldsError(false), 10000)
		} else {
			try {
				const res = await fetch(QuoteWidgetConfig.webhookUrl, {
					method: 'POST',
					body: JSON.stringify({
						selectedProducts,
						formData
					})
				})
				if (res.ok) {
					handleClearQuote()
					handleSelectStage(3)
				} else {
					setShowError(true)
					setTimeout(() => setShowError(false), 10000)
				}
			} catch {
				setShowError(true)
				setTimeout(() => setShowError(false), 10000)
			}
		}
	}

	useEffect(() => {
		const storageData = localStorage.getItem(STORAGE_KEY)
		const parsedData = storageData
			? JSON.parse(localStorage.getItem(STORAGE_KEY))
			: null
		if (parsedData) {
			setSelectedProducts(parsedData.selectedProducts)
			setFormData(parsedData.formData)
		}
		setInitialized(true)
	}, [])

	useEffect(() => {
		if (initialized) {
			localStorage.setItem(
				STORAGE_KEY,
				JSON.stringify({selectedProducts, formData})
			)
		}
	}, [selectedProducts, formData])

	return (
		<ThemeProvider theme={QuoteWidgetTheme}>
			<Global styles={[destyle]} />

			{QuoteWidgetConfig.quoteWidgetButtonSelector &&
			document.querySelector(QuoteWidgetConfig.quoteWidgetButtonSelector)
				? createPortal(
						<Button variant='solid' colored onClick={handleOpenSidebar}>
							Quote
						</Button>,
						document.querySelector(
							QuoteWidgetConfig.quoteWidgetButtonSelector
						)
				  )
				: null}

			{QuoteWidgetConfig.productButtonsSelector
				? [
						...document.querySelectorAll(
							QuoteWidgetConfig.productButtonsSelector
						)
				  ].map((wrapper) =>
						createPortal(
							<Button
								onClick={() => {
									handleSelectStage(1)
									handleAddProduct(
										QuoteWidgetConfig.productButtonsSKU()
									)
									handleOpenSidebar()
								}}
								variant='solid'
								colored
							>
								Add to quote
							</Button>,
							wrapper
						)
				  )
				: null}
			{isOpen ? (
				<style
					dangerouslySetInnerHTML={{
						__html: `body {
				overflow: hidden;
			}`
					}}
				/>
			) : (
				''
			)}

			<SideBarWrapper id='commerce-right-quote-widget' isOpen={isOpen}>
				<SideBarBackdrop isOpen={isOpen} onClick={handleCloseSidebar} />
				<SideBarContent>
					<SideBarHeading>
						<SideBarTitle>Quote</SideBarTitle>
						<SideBarCloseIcon onClick={handleCloseSidebar} />
					</SideBarHeading>
					<SideBarInnerContent>
						{currentStage === 1 ? (
							<QuoteSectionWrapper>
								<QuoteSectionSearchWrapper>
									<InstantSearch
										searchClient={searchClient}
										indexName={QuoteWidgetConfig.algoliaIndex}
									>
										<SearchBox
											placeholder='Search...'
											queryHook={queryHook}
											classNames={{
												root: 'quote-section--instantsearch-wrapper',
												input: 'quote-section--instantsearch-input',
												submit: 'quote-section--instantsearch-submit',
												reset: 'quote-section--instantsearch-reset',
												loadingIndicator:
													'quote-section--instantsearch-loading'
											}}
											onFocus={handleFocus}
										/>
										<QuoteSectionHits
											backdropHandle={handleBlur}
											handleAddProduct={handleAddProduct}
											isActive={isActive}
										/>
									</InstantSearch>
									{selectedProducts.length === 0 ? (
										<QuoteSectionEmptyWrapper>
											<QuoteSectionEmptyTitle>
												Oops, it's empty
											</QuoteSectionEmptyTitle>
											<QuoteSectionEmptyText>
												It looks like there are no products in
												your quote right now. please use search or
												add product.
											</QuoteSectionEmptyText>
										</QuoteSectionEmptyWrapper>
									) : (
										<>
											<QuoteSectionProductsStack>
												{selectedProducts.map((product) => (
													<QuoteSectionProductsItem
														key={product.sku}
														product={product}
														handleRemove={
															handleRemoveFromCart
														}
														handleChangeQuantity={
															handleChangeQuantity
														}
														handleChangeQuantityInput={
															handleChangeQuantityInput
														}
													/>
												))}
											</QuoteSectionProductsStack>
										</>
									)}
								</QuoteSectionSearchWrapper>

								{selectedProducts.length !== 0 ? (
									<>
										<QuoteSectionBottom>
											<Button
												variant='solid'
												colored
												onClick={() => handleSelectStage(2)}
											>
												Next step
											</Button>
										</QuoteSectionBottom>
									</>
								) : null}
							</QuoteSectionWrapper>
						) : null}
						{currentStage === 2 ? (
							<FormSectionWrapper>
								<FormTitle>Contact Info</FormTitle>
								<FormText>
									Please provide your contact details so that we can
									contact you about this quote
								</FormText>

								<FormErrorWrapper showError={showFieldsError}>
									<FormErrorText>
										Oops, you need to fill in all required fields
										correctly.
									</FormErrorText>
								</FormErrorWrapper>
								<FormErrorWrapper showError={showError}>
									<FormErrorText>
										Oops, an error has occurred! Please try again
										later.
									</FormErrorText>
								</FormErrorWrapper>

								<FormWrapper>
									<Input
										placeholder='Enter your name'
										label='Name'
										handle={handleChangeForm}
										value={formData.name}
										name='name'
										type='text'
										pattern='.{3,}'
										required
										errorMsg='Enter your name. At least 3 symbols'
									/>
									<Input
										placeholder='Enter your email'
										label='Email'
										handle={handleChangeForm}
										value={formData.email}
										name='email'
										type='email'
										pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
										required
										errorMsg='Enter correct email'
									/>
									<Input
										placeholder='Enter your phone'
										label='Phone number'
										handle={handleChangeForm}
										value={formData.phone}
										name='phone'
										type='tel'
										required
										pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
										errorMsg='Enter correct phone number: +xxxxxxxxxxxx'
									/>
									<Input
										placeholder='Enter your company name'
										label='Company name'
										handle={handleChangeForm}
										value={formData.company}
										name='company'
									/>
									<QuoteSectionMessageWrapper>
										<QuoteSectionMessageLabel>
											Leave your comment
										</QuoteSectionMessageLabel>
										<QuoteSectionMessageText
											value={formData.message}
											name='message'
											onChange={handleChangeForm}
											placeholder='Please provide any comments here'
										/>
									</QuoteSectionMessageWrapper>
									<FormButtonsGroup>
										<Button
											variant='outlined'
											onClick={() => handleSelectStage(1)}
										>
											<BackIcon />
											Back
										</Button>
										<Button
											variant='solid'
											type='button'
											colored
											onClick={handleSubmitQuote}
										>
											Submit Quote
										</Button>
									</FormButtonsGroup>
								</FormWrapper>
							</FormSectionWrapper>
						) : null}
						{currentStage === 3 ? (
							<FormSubmittedWrapper>
								<FormSubmittedTitle>Thank You!</FormSubmittedTitle>
								<FormSubmittedText>
									We will contact you as soon as possible, using the
									contact information you provided.
								</FormSubmittedText>
								<span />
								<FormSubmittedSubtext>
									Would you like to create a new quote?
								</FormSubmittedSubtext>
								<FormSubmittedButtons>
									<Button
										variant='solid'
										onClick={() => handleSelectStage(1)}
									>
										Yes
									</Button>
									<Button
										variant='outlined'
										onClick={() => {
											handleSelectStage(1)
											handleCloseSidebar()
										}}
									>
										No
									</Button>
								</FormSubmittedButtons>
							</FormSubmittedWrapper>
						) : null}
					</SideBarInnerContent>
				</SideBarContent>
			</SideBarWrapper>
		</ThemeProvider>
	)
}

export default App
