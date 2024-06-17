'use client'
import Image from 'next/image'
import styles from './Thumbnails.module.scss'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import Loading from '../loading'

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export default function SingleThumbnail({
	thumbnail,
	description,
	category,
	slug,
}) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handleClick = async e => {
		e.preventDefault()

		setLoading(true)

		await router.push(category ? `/${slug}?category=${category}` : `/${slug}`)
		scrollToTop()

		setLoading(false)
	}

	return (
		<>
			{loading && <Loading />}
			<div
				key={thumbnail.alt}
				onClick={handleClick}
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
