import getPost from '../lib/getPost'



export default async function handleDataToDisplayInGallery(params) {
	const post = await getPost(params.slug)


	const description = post.data.nodeByUri.blocks[0].attributes.content
	const heading = post.data.nodeByUri.title
	const imageBlocks = post.data.nodeByUri.blocks.filter(block => block.name==='core/image')
 const images = imageBlocks.map(block => ({attributes: block.attributes, htmlContent: block.htmlContent}))

function handleAltTextsForImages(images) {
	return images.map(image => {
		const htmlParts = image.htmlContent.split(' ')
		const indexStart = htmlParts.findIndex(el => el.includes('alt'))
		const indexEnd = htmlParts.findIndex(el => el.includes('</figure>'))

		// Calculate the number of elements to extract
		const elementsToExtract = indexEnd - indexStart - 1

		// Extract and return the alt text parts
		return htmlParts.splice(indexStart, elementsToExtract)
	})
}

console.log(handleAltTextsForImages(images))



	return { heading, description, images }
}
