import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	render() {
		const sheet = new ServerStyleSheet()
		const main = sheet.collectStyles(<Main />)
		const styleTags = sheet.getStyleElement()

		return (
			<html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Lato"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
					/>
					<link
						href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
						rel="stylesheet"
					/>
					<style>
						{`
						body {
							font-family: Lato, sans-serif !important;
							background: #f8f8f8;
						}
						.lnr {
							padding-right: 8px;
						}
						a {
	color: #ed174c !important;
	cursor: pointer !important;
	text-decoration: none;
	}
	a:hover {
		text-decoration: underline !important;
	}`}
					</style>
					<title>Lola Planner</title>
					{styleTags}
				</Head>

				<body>
					<div className="root">
						{main}
					</div>

					<NextScript />
				</body>
			</html>
		)
	}
}
