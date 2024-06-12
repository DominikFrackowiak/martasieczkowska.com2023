'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './Gallery.module.scss'
import { motion } from 'framer-motion'
import { ImagesCarousel } from '../components/ImagesCarousel'
import ArrowUp from './ArrowUp'

export default function Gallery({ images, headingInnerText, postInnerText }) {
	const imageRefs = useRef([])
	const imagesURLS = images.map(image => image.attributes.url)
	const [windowWidth, setWindowWidth] = useState('')

	console.log(images)

	useEffect(() => {
		setTimeout(() => {
			setWindowWidth(window.innerWidth)
		}, 500)

		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		if (windowWidth < 768) {
			setClickedImageIndex(-1)
		}
	}, [windowWidth])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const imagesSizes = images.map(image => ({
		height: image.attributes.height,
		width: image.attributes.width,
	}))

	const [clickedImageIndex, setClickedImageIndex] = useState(-1)
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

	function handleStateChange() {
		setClickedImageIndex(-1)
	}

	return (
		<>
			{clickedImageIndex === -1 && (
				<motion.div
					initial={{ opacity: 0, x: '-100vw' }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: '100vw' }}
					className={styles.galleryWrapper}
					transition={{ delay: 0.5 }}
				>
					<h1>{headingInnerText}</h1>

					<p>{postInnerText}</p>
					<ArrowUp smallerDevices={false} />
					{images.map((img, index) => (
						<section
							key={img.attributes.id}
							ref={el => (imageRefs.current[index] = el)}
							className={img.attributes.className}
						>
							<Image
								src={img.attributes.url}
								alt={img.htmlContent}
								width={img.attributes.width}
								height={img.attributes.height}
								className={styles.galleryImage}
								quality={70}
								sizes='(max-width: 575px) 320px, (max-width: 991px) 576px, (max-width: 1199px) 668px, 724px'
								onClick={() => {
									scrollToTop()
									if (windowWidth >= 768) setClickedImageIndex(index)
								}}
								style={{ display: 'block' }}
							/>
							{img.caption ? <small>{img.caption}</small> : null}
						</section>
					))}
					<ArrowUp smallerDevices={true} />
				</motion.div>
			)}
			{clickedImageIndex >= 0 && windowWidth >= 768 && (
				<ImagesCarousel
					images={imagesURLS}
					index={clickedImageIndex}
					handleStateChange={handleStateChange}
					imagesSizes={imagesSizes}
				/>
			)}
		</>
	)
}
