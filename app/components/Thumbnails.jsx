import styles from './Thumbnails.module.scss'

import getAllPosts from '../../lib/getAllPosts'
import getAllPostsByCategory from '../../lib/getAllPostsByCategory'

import SingleThumbnail from '../components/SingleThumbnail'

export default async function Thumbnails({ category }) {
	let data = await getAllPosts()
	// if (category === undefined) {
	// 	return data
	// } else if (category === 'graphic-design') {
	// 	data = data
	// } else if (category === 'illustration') {
	// 	data = data
	// }

	



	return (
		<div className='responsiveWrapper'>
			<div className={styles.thumbnails}>
				{data &&
					data.reverse().map((thumbnail, index) => {
						// console.log(category)
						return (
							<SingleThumbnail
								key={index}
								thumbnail={thumbnail.acf.thumbnail.url}
								description={thumbnail.acf.thumbnail_description}
								category={category}
								slug={thumbnail.acf.slug}
							/>
						)
					})}
			</div>
		</div>
	)
}
