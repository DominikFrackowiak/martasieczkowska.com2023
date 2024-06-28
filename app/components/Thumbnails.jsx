import getThumbnailsByCategory from '../../lib/getThumbnailsByCategory'
import getAllThumbnails from '../../lib/getAllThumbnails'

import SingleThumbnail from './SingleThumbnail'

import styles from './Thumbnails.module.scss'

export const revalidate = 3600

export default async function Thumbnails({ category, isFullImageDisplayed }) {
	
	let data

	if (category === undefined) {
		data = await getAllThumbnails()
	} else {
		data = await getThumbnailsByCategory(category)
	}

	data = data?.reverse()

	const contentToDisplay = !isFullImageDisplayed ? (
		<div className={styles.thumbnails}>
			{data.length > 0 &&
				data.map(thumbnail => {
					return (
						<SingleThumbnail
							key={thumbnail?.thumbnail?.id}
							thumbnail={thumbnail?.thumbnail?.link}
							description={thumbnail?.thumbnaildescription}
							slug={thumbnail?.slug}
							category={category}
						/>
					)
				})}
		</div>
	) : null

	return contentToDisplay
		
	
}
