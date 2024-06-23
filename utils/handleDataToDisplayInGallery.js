import getPost from '../lib/getPost'
import extractAltFromHtmlContent from './extractAltFromHtmlContent'

export const revalidate = 60

export default async function handleDataToDisplayInGallery(params) {
	const post = await getPost(params.slug)

	const description = post?.data?.nodeByUri?.blocks[0].attributes.content
	const heading = post?.data?.nodeByUri?.title
	const imageBlocks = post?.data?.nodeByUri?.blocks.filter(
		block => block.name === 'core/image'
	)
	const images = imageBlocks?.map(block => ({
		attributes: block.attributes,
		htmlContent: extractAltFromHtmlContent(block.htmlContent),
	}))

	return { heading, description, images }
}
