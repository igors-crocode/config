import {css} from '@emotion/react'
const QuoteWidgetConfig = window.QuoteWidgetConfig
export const destyle = (theme) => css`
	@import url(${QuoteWidgetConfig.googleFontUrl});

	${QuoteWidgetConfig.quoteWidgetSelector} {
		margin: 0;
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;

		*,
		::before,
		::after {
			font-family: ${theme.typography.fontFamily};
			box-sizing: border-box;
			border-style: solid;
			border-width: 0;
		}

		p {
			margin: 0;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
		}

		hr {
			box-sizing: content-box; /* 1 */
			height: 0; /* 1 */
			overflow: visible; /* 2 */
			border-top-width: 1px;
			margin: 0;
			clear: both;
			color: inherit;
		}

		a {
			background-color: transparent;
			text-decoration: none;
			color: inherit;
		}

		svg,
		img,
		embed,
		object,
		iframe {
			vertical-align: bottom;
		}

		input,
		optgroup,
		select,
		textarea {
			-webkit-appearance: none; /* 1 */
			appearance: none;
			background: transparent;
			border-radius: 0;
			text-align: inherit;
			text-transform: inherit; /* 2 */
		}

		button,
		[type='button'],
		[type='reset'],
		[type='submit'] {
			cursor: pointer;
		}

		button:disabled,
		[type='button']:disabled,
		[type='reset']:disabled,
		[type='submit']:disabled {
			cursor: default;
		}

		:-moz-focusring {
			outline: auto;
		}

		select:disabled {
			opacity: inherit;
		}

		option {
			padding: 0;
		}

		fieldset {
			margin: 0;
			padding: 0;
			min-width: 0;
		}

		legend {
			padding: 0;
		}

		progress {
			vertical-align: baseline;
		}

		textarea {
			overflow: auto;
		}

		[type='number']::-webkit-inner-spin-button,
		[type='number']::-webkit-outer-spin-button {
			height: auto;
		}

		[type='search'] {
			outline-offset: -2px; /* 1 */
		}

		[type='search']::-webkit-search-decoration {
			-webkit-appearance: none;
		}

		input[type='search']::-webkit-search-decoration,
		input[type='search']::-webkit-search-cancel-button,
		input[type='search']::-webkit-search-results-button,
		input[type='search']::-webkit-search-results-decoration {
			display: none;
		}

		::-webkit-file-upload-button {
			-webkit-appearance: button; /* 1 */
			font: inherit; /* 2 */
		}

		[type='number'] {
			-moz-appearance: textfield;
		}

		label[for] {
			cursor: pointer;
		}

		details {
			display: block;
		}

		summary {
			display: list-item;
		}

		[contenteditable]:focus {
			outline: auto;
		}

		table {
			border-color: inherit; /* 1 */
			border-collapse: collapse;
		}

		caption {
			text-align: left;
		}

		td,
		th {
			vertical-align: top;
			padding: 0;
		}

		th {
			text-align: left;
			font-weight: bold;
		}
	}
`
