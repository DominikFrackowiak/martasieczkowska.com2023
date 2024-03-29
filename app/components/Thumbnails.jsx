import styles from './Thumbnails.module.scss'

import getAllPosts from '../../lib/getAllPosts'
import getAllPostsByCategory from '../../lib/getAllPostsByCategory'

import SingleThumbnail from '../components/SingleThumbnail'

export default async function Thumbnails({ category }) {


	let data

	if (category === undefined) {
		data = await getAllPosts()
	} else {
		data = await getAllPosts()

		data = data.filter(el => el.acf.category.slug === category)
	}



	return (
		<div className='responsiveWrapper'>
			<div className={styles.thumbnails}>
				{data.length &&
					data.reverse().map((thumbnail, index) => {
						
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
