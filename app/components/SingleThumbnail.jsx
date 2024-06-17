'use client'

import Image from 'next/image'
import styles from './Thumbnails.module.scss'

export default function SingleThumbnail({
	thumbnail,
	description,
	
	slug,
	handleClick
}) {
	return (
		<div
			key={thumbnail?.alt}
			className={styles.singleThumbnail}
			onClick={e => handleClick(e, slug)}
		>
			<div
				className={styles.singleThumbnail__description}
				dangerouslySetInnerHTML={{ __html: description }}
				onClick={e => handleClick(e, slug)}
			></div>
			<Image
				className={styles.singleThumbnail__image}
				src={thumbnail}
				alt={slug}
				width={694}
				height={578}
				onClick={e => handleClick(e, slug)}
			/>
		</div>
	)
}
