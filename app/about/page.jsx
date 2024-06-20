import Image from 'next/image'

import getAboutPage from '../../lib/getAboutPage'
import handleParagraphToRender from '../../utils/handleParagraphToRender'

import AboutExperience from '../components/AboutExperience'
import PageSwipeCloseMenu from '../components/PageSwipeCloseMenu'
import Thumbnails from '../components/Thumbnails'

import { v4 as uuidv4 } from 'uuid'

export default async function About() {
	const data = await getAboutPage()

	// console.log(data)

	const contentToDisplay = data.data.map((el, index) => {
		if (el.name === 'core/paragraph' && index !== 1) {
			return handleParagraphToRender(el.attributes.content)
		} else if (el.name === 'core/paragraph' && index === 1) {
			return <AboutExperience key={uuidv4()} />
		} else if (el.name === 'core/image') {
			return (
				<Image
					src={el.attributes.url}
					alt={el.htmlContent}
					width={el.attributes.width}
					height={el.attributes.height}
					quality={70}
					style={{ display: 'block' }}
					key={uuidv4()}
				/>
				// {img.caption ? <small>{img.caption}</small> : null}
			)
		}
	})

	return (
		<div className='responsiveWrapper'>
			<main
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '15px',
					maxWidth: '550px',
				}}
			>
				<h1>{data.title}</h1>
				{contentToDisplay}
			</main>
			<PageSwipeCloseMenu about={true} />
			<Thumbnails />
		</div>
	)
}
