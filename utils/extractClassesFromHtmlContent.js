export default function extractClassesFromHtmlContent(htmlContent) {
	const classMatch = htmlContent.match(/class="([^"]*)"/g)
return classMatch ? classMatch[1].split(/\s+/) : null
}
