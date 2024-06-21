'use client'

import { CldImage } from 'next-cloudinary'
import { useEffect, useRef, useState } from 'react'
import styles from './Gallery.module.scss'

import { ImagesCarousel } from '../components/ImagesCarousel'
import ArrowUp from './ArrowUp'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Gallery({ images, headingInnerText, postInnerText }) {
	const imageRefs = useRef([])
	const router = useRouter()
	const path = usePathname()
	const imagesURLS = images?.map(image => image.attributes.url)
	const [windowWidth, setWindowWidth] = useState('')
	const searchParams = useSearchParams()

	const bigImageIndex = searchParams.get('imageIndex')

	useEffect(() => {
		setTimeout(() => {
			setWindowWidth(window.innerWidth)
		}, 500)

		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

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

	const imagesSizes = images?.map(image => ({
		height: image.attributes.height,
		width: image.attributes.width,
	}))

	const [clickedImageIndex, setClickedImageIndex] = useState(-1)

	useEffect(() => {
		if (clickedImageIndex >= 0) {
			router.push(`${path}?imageIndex=${clickedImageIndex}`)
		} else {
			router.push(`${path}`)
		}
	}, [clickedImageIndex])

	function handleStateChange() {
		if (bigImageIndex) {
			scrollToImage(bigImageIndex)
		}

		setClickedImageIndex(-1)
	}

	const scrollToImage = index => {
		setTimeout(() => {
			imageRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
		}, 500)
	}

	return (
		<>
			{clickedImageIndex === -1 && (
				<div className={styles.galleryWrapper}>
					<div
						className={`${styles.galleryHeader} ${styles.galleryHeaderUpToLarge}`}
					>
						<h1>{headingInnerText}</h1>
						<p>{postInnerText}</p>
					</div>
					<div className={styles.allImagesWrapper}>
						{images?.map((img, index) => (
							<section
								key={img.attributes.id}
								ref={el => {
									console.log(`Assigning ref for index ${index}: `, el)
									imageRefs.current[index] = el
								}}
								className={img.attributes.className}
							>
								<div style={{ display: 'flex' }}>
									<CldImage
										src={img.attributes.url}
										alt={img.htmlContent}
										width={img.attributes.width}
										height={img.attributes.height}
										className={styles.galleryImage}
										quality={70}
										onClick={() => {
											scrollToTop()
											if (windowWidth >= 768) setClickedImageIndex(index)
										}}
										style={{ display: 'block' }}
									/>
									{img.caption ? <small>{img.caption}</small> : null}

									<ArrowUp smallerDevices={false} />
								</div>
							</section>
						))}

						<ArrowUp smallerDevices={true} />
					</div>
				</div>
			)}

			{clickedImageIndex >= 0 && windowWidth >= 768 && (
				<div className={styles.galleryWrapper}>
					<ImagesCarousel
						images={imagesURLS}
						index={clickedImageIndex}
						handleStateChange={handleStateChange}
						imagesSizes={imagesSizes}
					/>
				</div>
			)}
		</>
	)
}


