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

	const handleClick = async (e, slug) => {
		e.preventDefault()
		console.log('clicked', slug)
		setLoading(true)

		await router.push(category ? `/${slug}?category=${category}` : `/${slug}`)
		scrollToTop()

		setLoading(false)
	}

	useEffect(() => {
		console.log(loading)
	}, [loading])

	return (
		<>
			{loading && <Loading />}
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
		</>
	)
}
