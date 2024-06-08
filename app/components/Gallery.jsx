'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './Gallery.module.scss'
import { motion } from 'framer-motion'

export default function Gallery({ images, headingInnerText, postInnerText }) {
	const imageRefs = useRef([])

	// useEffect(() => {
	// 	imageRefs.current = imageRefs.current.slice(0, images.length)
	// }, [images])

	// useEffect(() => {
	// 	imageRefs.current.forEach(ref => {
	// 		if (ref) {
	// 			if (ref.clientHeight < 50) {
	// 				ref.classList.add('displayNone')
	// 			} else {
	// 				ref.classList.remove('displayNone')
	// 			}
	// 		}
	// 	})
	// }, [images])

	// console.log(images)

	return (
		<motion.div
			initial={{ opacity: 0, x: '-100vw' }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: '100vw' }}
			className={styles.galleryWrapper}
		>
			<h1>
				{headingInnerText}
			</h1>

			<p>{postInnerText}</p>
			{images.map((img, index) => (
				<section key={img.attributes.id} ref={el => (imageRefs.current[index] = el)} className={img.attributes.className}>
					<Image
						
						src={img.attributes.url}
						alt={img.htmlContent}
						width={img.attributes.width}
						height={img.attributes.height}
						className={styles.galleryImage}
						quality={80}
						sizes='(max-width: 575px) 320px, (max-width: 991px) 576px, (max-width: 1199px) 668px, 724px'
					/>
					{img.caption && <small>{img.caption}</small>}
				</section>
			))}
		</motion.div>
	)
}
