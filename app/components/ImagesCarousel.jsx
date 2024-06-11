import { Carousel } from '@ark-ui/react'
import Image from 'next/image'

export const ImagesCarousel = ({ images, index, handleStateChange, imagesSizes }) => {
	console.log(images)
	return (
		<Carousel.Root
			align='center'
			loop={true}
			slidesPerView={1}
			spacing='16px'
			orientation='horizontal'
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				backgroundColor: 'rgba(255, 255, 255, .9',
				zIndex: '100000',
			}}
			onClick={handleStateChange}
		>
			<Carousel.Viewport>
				<Carousel.ItemGroup>
					<Carousel.Item key={index} index={index}>
						<Image
							src={images[index]}
							alt={`Slide ${index}`}
							width={imagesSizes[index].width} // specify appropriate width
							height={imagesSizes[index].height} // specify appropriate height
							quality={90} // adjust quality as needed
						/>
					</Carousel.Item>
				</Carousel.ItemGroup>
			</Carousel.Viewport>
		</Carousel.Root>
	)
}
