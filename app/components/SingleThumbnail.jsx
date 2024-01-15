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

export default function SingleThumbnail({ thumbnail, description, category, slug }) {
	const router = useRouter()
	
	return (
		<>
			<div
				key={thumbnail.alt}
				onClick={() => {
					// setThumbnailSelected(thumbnail.alt)
					if (category === undefined) {
						router.push(`/${slug}`)
						scrollToTop()
					} else {
						router.push(`/${slug}?category=${category}`)
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
					src={thumbnail}
					alt={slug}
					width={694}
					height={578}
				/>
			</div>
		</>
	)
}
