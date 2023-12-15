'use client'
import Image from 'next/image'
import styles from './Thumbnails.module.scss'

import { useRouter } from 'next/navigation'

export default function SingleThumbnail({ thumbnail, description }) {
	const router = useRouter()
	return (
		<>
			<div
				key={thumbnail.alt}
				onClick={() => {
					// setThumbnailSelected(thumbnail.alt)
					router.push(`/${thumbnail.alt}`)
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
