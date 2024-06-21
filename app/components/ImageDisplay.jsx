import { useRef } from 'react'
import { CldImage } from 'next-cloudinary'
import styles from './Gallery.module.scss'

function ImageDisplay({ image, index, handleImageClick }) {
	const imageRef = useRef()

	return (
		<section ref={imageRef} className={image.attributes.className}>
			<div style={{ display: 'flex' }}>
				<CldImage
					src={image.attributes.url}
					alt={image.htmlContent}
					width={image.attributes.width}
					height={image.attributes.height}
					className={styles.galleryImage}
					quality={70}
					onClick={() => handleImageClick(index)}
					style={{ display: 'block' }}
				/>
				{image.caption && <small>{image.caption}</small>}
			</div>
		</section>
	)
}

export default ImageDisplay
