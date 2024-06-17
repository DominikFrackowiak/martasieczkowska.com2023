'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from './Thumbnails.module.scss'

import SingleThumbnail from '../components/SingleThumbnail'
import Loading from '../loading'

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export default function ThumbnailsClientSide({ data, category }) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handleClick = (e, slug) => {
		e.preventDefault()

		setLoading(true)

		router.push(category ? `/${slug}?category=${category}` : `/${slug}`)
		scrollToTop()

		setLoading(false)
	}

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<div className={styles.thumbnails}>
					{data.length > 0 &&
						data.map(thumbnail => {
							return (
								<SingleThumbnail
									key={thumbnail.thumbnail.id}
									thumbnail={thumbnail.thumbnail.link}
									description={thumbnail.thumbnailDescription}
									slug={thumbnail.slug}
									handleClick={handleClick}
								/>
							)
						})}
				</div>
			)}
		</>
	)
}
