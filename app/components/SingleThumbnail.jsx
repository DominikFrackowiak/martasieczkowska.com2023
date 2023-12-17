'use client'
import Image from 'next/image'
import styles from './Thumbnails.module.scss'

import { useRouter } from 'next/navigation'

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
					} else {
						router.push(`/${thumbnail.alt}?category=${category}`)
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
