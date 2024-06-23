export default function extractFigcaptionFromHtmlContent(htmlContent) {
	const figcaptionMatch = htmlContent.match(
		/<figcaption[^>]*>(.*?)<\/figcaption>/s
	)
	return figcaptionMatch ? figcaptionMatch[1] : null
}
