'use client'
import Image from 'next/image'
import styles from './Thumbnails.module.scss'

import { useRouter } from 'next/navigation'

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export default function SingleThumbnail({ thumbnail, description, category }) {
	const router = useRouter()
	// console.log(category)
	return (
		<>
			<div
				key={thumbnail.alt}
				onClick={() => {
					// setThumbnailSelected(thumbnail.alt)
					if (category === undefined) {
						router.push(`/${thumbnail.alt}`)
						scrollToTop()
					} else {
						router.push(`/${thumbnail.alt}?category=${category}`)
						scrollToTop()
					}
				}}
				className={styles.singleThumbnail}
			>
				<div
					className={styles.singleThumbnail__description}
					dangerouslySetInnerHTML={{ __html: description }}
				></div>
				<Image
					className={styles.singleThumbnail__image}
					src={thumbnail.src}
					alt={thumbnail.alt}
					width={694}
					height={578}
				/>
			</div>
		</>
	)
}
