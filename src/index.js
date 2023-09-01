import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LogRocket from 'logrocket'
LogRocket.init('9eqde1/quote-widget')

const root = ReactDOM.createRoot(
	document.querySelector(window.QuoteWidgetConfig.quoteWidgetSelector)
)
root.render(<App />)
