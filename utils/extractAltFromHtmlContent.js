export default function extractAltFromHtmlContent(htmlContent) {
	const altMatch = htmlContent.match(/alt="([^"]*)"/)
	return altMatch ? altMatch[1] : null
}
