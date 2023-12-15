import Image from 'next/image'
import styles from './Gallery.module.scss'

export default function Gallery({ figures }) {
	let images = []

	if (Array.isArray(figures) && figures.length > 0) {
		images = figures
			.map(figure => {
				const srcMatch = figure.match(/src="([^"]+)"/)
				const widthMatch = figure.match(/width="(\d+)"/)
				const heightMatch = figure.match(/height="(\d+)"/)

				if (!srcMatch || !widthMatch || !heightMatch) return null

				const src = srcMatch[1]
				const width = parseInt(widthMatch[1], 10)
				const height = parseInt(heightMatch[1], 10)

				return { src, width, height }
			})
			.filter(Boolean)
	}
 




	return (
		<div className={styles.galleryWrapper}>
			{images.map((img, index) => (
				<Image
					key={index}
					src={img.src}
					width={img.width}
					height={img.height}
					alt=''
     className={styles.galleryImage}
				/>
			))}
		</div>
	)
}
