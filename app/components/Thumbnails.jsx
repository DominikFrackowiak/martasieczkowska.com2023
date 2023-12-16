import styles from './Thumbnails.module.scss'

// import getAllPosts from '../lib/getAllPosts'
import getAllPosts from '../../lib/getAllPosts'
import getAllPostsByCategory from '../../lib/getAllPostsByCategory'
// import SingleThumbnail from '@/SingleThumbnail'
import SingleThumbnail from '../components/SingleThumbnail'

// const graphicDesignThumbnails = thumbnails.filter(
// 	thumbnail => thumbnail.tag === 'graphic design'
// )

// const illustrationThumbnails = thumbnails.filter(
// 	thumbnail => thumbnail.tag === 'illustration'
// )

// console.log(illustrationThumbnails)

export default async function Thumbnails({ category }) {
	let data
	if (category === undefined) {
		data = await getAllPosts()
	} else if (category === 'graphic-design') {
		data = await getAllPostsByCategory('5')
	} else if (category === 'illustration') {
		data = await getAllPostsByCategory('3')
	}

	// console.log(graphicDesign, illustration)
	// const [thumbnailSelected, setThumbnailSelected] = useState(null)

	let dataContentArray = []

	for (let i = 0; i < data?.length; i++) {
		dataContentArray.push(data[i].content.rendered)
	}

	// console.log(
	// 	dataContentArray[0]
	// 		.split('\n')
	// 		.filter(el => el !== '')
	// 		.pop()
	// )

	const figures = dataContentArray.map(el =>
		el
			.split('\n')
			.filter(el => el !== '')
			.pop()
	)

	const thumbnailDescriptions = dataContentArray
		.map(
			el =>
				el
					.split('\n')
					.filter(el => el !== '')
					.filter(el => el.includes('<p>'))[2]
		)
		.reverse()

	// const descriptions = dataContentArray
	// 	.map(el => el.split('\n').filter(el => el.includes('<p>'))).reverse()

	// console.log(descriptions)

	let thumbnails = []

	if (Array.isArray(figures) && figures.length > 0) {
		thumbnails = figures
			.map(figure => {
				const srcMatch = figure.match(/src="([^"]+)"/)
				const widthMatch = figure.match(/width="(\d+)"/)
				const heightMatch = figure.match(/height="(\d+)"/)
				const altMatch = figure.match(/alt="([^"]*)"/)

				if (!srcMatch || !widthMatch || !heightMatch) return null

				const src = srcMatch[1]
				const width = parseInt(widthMatch[1], 10)
				const height = parseInt(heightMatch[1], 10)
				const alt = altMatch ? altMatch[1] : ''

				return { src, width, height, alt }
			})
			.reverse()
			.filter(Boolean)
	}

	return (
		<div className='responsiveWrapper'>
			<div className={styles.thumbnails}>
				{thumbnails &&
					thumbnails.map((thumbnail, index) => (
						<SingleThumbnail
							key={index}
							thumbnail={thumbnail}
							description={thumbnailDescriptions[index]}
							category={category}
						/>
					))}

				{/* {thumbnails &&
				graphicDesign === true &&
				illustration === false &&
				graphicDesignThumbnails.map(thumbnail => (
					<div
						key={thumbnail.alt}
						onClick={() => setThumbnailSelected(thumbnail.id)}
						className={styles.singleThumbnail}
					>
						<Image
							className={styles.singleThumbnail__image}
							src={thumbnail.url}
							alt={thumbnail.text}
							height={290}
							width={348}
						/>
						<div className={styles.singleThumbnail__description}></div>
					</div>
				))}
			{thumbnails &&
				illustration === true &&
				graphicDesign === false &&
				illustrationThumbnails.map(thumbnail => (
					<div
						key={thumbnail.id}
						onClick={() => setThumbnailSelected(thumbnail.id)}
						className={styles.singleThumbnail}
					>
						<Image
							className={styles.singleThumbnail__image}
							src={thumbnail.url}
							alt={thumbnail.text}
							height={290}
							width={348}
						/>
						<div className={styles.singleThumbnail__description}></div>
					</div>
				))} */}
			</div>
		</div>
	)
}
