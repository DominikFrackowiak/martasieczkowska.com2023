import Link from 'next/link'

import Image from 'next/image'
import styles from './Thumbnails.module.scss'

export default function SingleThumbnail({
	thumbnail,
	description,
	category,
	slug,
}) {
	console.log(description)
	return (
		<Link
			href={category ? `/works/${slug}?category=${category}` : `/works/${slug}`}
			key={thumbnail?.alt}
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
		</Link>
	)
}
