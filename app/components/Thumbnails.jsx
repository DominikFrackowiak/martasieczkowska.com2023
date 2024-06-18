import getThumbnailsByCategory from '../../lib/getThumbnailsByCategory'
import getAllThumbnails from '../../lib/getAllThumbnails'

import ThumbnailsClientSide from './ThumbnailsClientSide'

export const revalidate = 3600

export default async function Thumbnails({ category }) {
	function handleLoadingInfo() {}

	console.log(category)

	let data

	if (category === undefined) {
		data = await getAllThumbnails()
	} else {
		data = await getThumbnailsByCategory(category)
	}

	data = data?.reverse()

	return (
		<div className='responsiveWrapper'>
			<ThumbnailsClientSide data={data} />
		</div>
	)
}
