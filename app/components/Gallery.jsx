'use client'
import Image from 'next/image'
import styles from './Gallery.module.scss'
import { motion } from 'framer-motion'

export default function Gallery({ images }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: '-100vw' }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: '100vw' }}
			className={styles.galleryWrapper}
		>
			{images.map((img, index) => (
				<>
					<Image
						key={index}
						src={img.url}
						alt={img.alt}
						width={img.width}
						height={img.height}
						className={styles.galleryImage}
						sizes='(max-width: 575px) 320px, (max-width: 991px) 576px, (max-width: 1199px) 668px, 724px'
					/>
					{img.caption && <small>{img.caption}</small>}
				</>
			))}
		</motion.div>
	)
}
