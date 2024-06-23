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

	const searchParams = useSearchParams()

	const bigImageIndex = searchParams.get('imageIndex')

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
											setClickedImageIndex(index)
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

			{clickedImageIndex >= 0 && (
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
