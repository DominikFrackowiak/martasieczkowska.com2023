import { Carousel } from '@ark-ui/react'
import Image from 'next/image'

import styles from './ImagesCarousel.module.scss'

export const ImagesCarousel = ({
	images,
	index,
	handleStateChange,
	imagesSizes,
}) => {
	return (
		<Carousel.Root
			align='center'
			slidesPerView={1}
			orientation='horizontal'
			style={{
				position: 'relative',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, 0)',

				zIndex: '100000',
				paddingBottom: '80px',
			}}
			className={styles.carouselWrapper}
			onClick={handleStateChange}
		>
			<Carousel.Viewport>
				<Carousel.ItemGroup>
					<Carousel.Item key={index} index={index}>
						<Image
							src={images[index]}
							alt={`Slide ${index}`}
							width={imagesSizes[index].width}
							height={imagesSizes[index].height}
							quality={90}
							className={styles.fullImage}
						/>
					</Carousel.Item>
				</Carousel.ItemGroup>
			</Carousel.Viewport>
		</Carousel.Root>
	)
}
