import { Carousel } from '@ark-ui/react'

export const ImagesCarousel = ({ images, index, handleStateChange}) => {
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
				transform: 'translate(-50%, -50%',
				backgroundColor: 'rgba(255, 255, 255,.9',
				zIndex: '100000'
			}}
			onClick={handleStateChange}
		>
	
			<Carousel.Viewport>
				<Carousel.ItemGroup>
					<Carousel.Item key={index} index={index}>
						<img src={`${images[index]}`} alt={`Slide ${index}`} />
					</Carousel.Item>
				</Carousel.ItemGroup>
			</Carousel.Viewport>
		</Carousel.Root>
	)
}
