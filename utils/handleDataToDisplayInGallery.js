import getPost from '../lib/getPost'

function extractAlt(htmlContent) {
	const regex = /alt="([^"]*)"/
	const match = htmlContent.match(regex)
	return match ? match[1] : null
}


export default async function handleDataToDisplayInGallery(params) {
	const post = await getPost(params.slug)
	// console.log(post.data.nodeByUri.blocks)

	const description = post.data.nodeByUri.blocks[0].attributes.content
	const heading = post.data.nodeByUri.title
	const imageBlocks = post.data.nodeByUri.blocks.filter(
		block => block.name === 'core/image'
	)
	const images = imageBlocks.map(block => ({
		attributes: block.attributes,
		htmlContent: extractAlt(block.htmlContent),
	}))

	console.log(images)

	return { heading, description, images }
}
