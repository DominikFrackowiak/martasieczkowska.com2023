import { Carousel } from '@ark-ui/react'
import Image from 'next/image'

import styles from './ImagesCarousel.module.scss'

export const ImagesCarousel = ({
	images,
	index,
	handleStateChange,
	imagesSizes,
}) => {
	console.log(images)
	return (
		<Carousel.Root
			align='center'
			loop={true}
			slidesPerView={1}
			spacing='16px'
			orientation='horizontal'
			style={{
				// position: 'absolute',
				// top: '50%',
				// left: '50%',
				// transform: 'translate(-50%, -50%)',
				// backgroundColor: 'rgba(255, 255, 255, .9',
				zIndex: '100000',

				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className='responsiveWrapper'
			onClick={handleStateChange}
		>
			<Carousel.Viewport>
				<Carousel.ItemGroup>
					<Carousel.Item key={index} index={index}>
						{/* <div className={styles.imageWrapper}> */}
						<Image
							src={images[index]}
							alt={`Slide ${index}`}
							width={imagesSizes[index].width}
							height={imagesSizes[index].height}
							quality={90}
							className={styles.fullImage}
						/>
						{/* </div> */}
					</Carousel.Item>
				</Carousel.ItemGroup>
			</Carousel.Viewport>
		</Carousel.Root>
	)
}
