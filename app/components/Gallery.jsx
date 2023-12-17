'use client'
import Image from 'next/image'
import styles from './Gallery.module.scss'
import { motion } from 'framer-motion'

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
		<motion.div
			initial={{ opacity: 0, x: '-100vw' }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: '100vw' }}
			className={styles.galleryWrapper}
		>
			{images.map((img, index) => (
				<Image
					key={index}
					src={img.src}
					width={img.width}
					height={img.height}
					className={styles.galleryImage}
					sizes='(max-width: 575px) 320px, (max-width: 991px) 576px, (max-width: 1199px) 668px, 724px'
				/>
			))}
		</motion.div>
	)
}
