window.QuoteWidgetConfig = {
	webhookUrl: 'https://eoxwn5tbnkld73o.m.pipedream.net',
	googleFontUrl:
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap',
	productTitle: 'skuname',
	productSKU: 'SKU',
	productImage: 'Product_Images',
	productImageTemplate: 'https://chasmbobs.s3.ap-southeast-2.amazonaws.com/',
	productImagePlaceholder: '',
	algoliaKey: '3655082f02ed75572a1dda8d91d67d15',
	algoliaIndex: 'products',
	algoliaAppID: '9HQXF52VAR',
	storageKey: 'QUOTE_WIDGET_STORAGE',

	//You need to pass data of product to this function (Object with fields which you declare above: productTitle, productSKU, ProductImage)
	productButtonsSKU: () => {
		return {
			SKU: 'SKU123-Example',
			skuname: 'Title',
			Product_Images: '58_aluminum-universal-window-adaptor-305510_0_1_1.png'
		}
	},

	// Blank field - doesn't render anything
	productButtonsSelector: '.commerceright-product-button', // Should be class name
	quoteWidgetButtonSelector: '.s-quote', // Should be css selector (Used document.querySelector)
	quoteWidgetSelector: '#commerceright-quote-widget' // Should be css selector
}
