import styles from './Thumbnails.module.scss'

import getAllPosts from '../../lib/getAllPosts'
import getThumbnailsByCategory from '../../lib/getThumbnailsByCategory'

import SingleThumbnail from '../components/SingleThumbnail'

export default async function Thumbnails({ category }) {
	let receivedData
	let data =[]

	if (category === undefined) {
		receivedData = await getThumbnailsByCategory(category)
	} else {
		receivedData = await getThumbnailsByCategory(category)
	}

	data.push(receivedData)

	return (
		<div className='responsiveWrapper'>
			<div className={styles.thumbnails}>
				{data.length &&
					data.reverse().map(thumbnail => {
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
