import styles from './Thumbnails.module.scss'

import getAllPosts from '../../lib/getAllPosts'
import getThumbnailsByCategory from '../../lib/getThumbnailsByCategory'
import getAllThumbnails from '../../lib/getAllThumbnails'

import SingleThumbnail from '../components/SingleThumbnail'

export const revalidate = 60

export default async function Thumbnails({ category }) {
	let data

	if (category === undefined) {
		data = await getAllThumbnails()
	} else {
		data = await getThumbnailsByCategory(category)
	}



	data = data?.reverse()

	return (
		<div className='responsiveWrapper'>
			<div className={styles.thumbnails}>
				{data.length > 0 &&
					data.map(thumbnail => {
						return (
							<SingleThumbnail
								key={thumbnail.thumbnail.id}
								thumbnail={thumbnail.thumbnail.link}
								description={thumbnail.thumbnailDescription}
								category={category}
								slug={thumbnail.slug}
							/>
						)
					})}
			</div>
		</div>
	)
}
