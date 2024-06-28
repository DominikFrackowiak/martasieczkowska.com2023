import Image from 'next/image'

import getAboutPage from '../../lib/getAboutPage'
import handleParagraphToRender from '../../utils/handleParagraphToRender'

import AboutExperience from '../components/AboutExperience'
import PageCloseMenu from '../components/PageCloseMenu'
import Thumbnails from '../components/Thumbnails'

import extractAltFromHtmlContent from '../../utils/extractAltFromHtmlContent'
import extractFigcaptionFromHtmlContent from '../../utils/extractFigcaptionFromHtmlContent'

import { v4 as uuidv4 } from 'uuid'

import styles from './AboutPage.module.scss'

export const metadata = {
	title: 'Marta Sieczkowska | About',
	description:
		'Marta Sieczkowska - graphic designer and illustrator. Specialized in editorial design, typography, educational illustration, illustration for children, press illustration, infographics, branding.',
}

export default async function About() {
	// const data = await getAboutPage()

	// const contentToDisplay = data.data.map((el, index) => {
	// 	if (el.name === 'core/paragraph' && index !== 1) {
	// 		return handleParagraphToRender(el.attributes.content)
	// 	} else if (el.name === 'core/paragraph' && index === 1) {
	// 		return <AboutExperience key={uuidv4()} />
	// 	} else if (el.name === 'core/image') {
	// 		const imageCaption = extractFigcaptionFromHtmlContent(el.htmlContent)
	// 		return (
	// 			<div className={styles.portraitWrapper} key={uuidv4()}>
	// 				<Image
	// 					src={el.attributes.url}
	// 					alt={extractAltFromHtmlContent(el.htmlContent)}
	// 					width={el.attributes.width}
	// 					height={el.attributes.height}
	// 					quality={70}
	// 					style={{ display: 'block' }}
	// 					className={styles.portrait}
	// 				/>
	// 				{imageCaption ? (
	// 					<small className={styles.portraitCaption}>{imageCaption}</small>
	// 				) : null}
	// 			</div>
	// 		)
	// 	}
	// })

	return (
		<>
			<main className={styles.main}>
				{/* <h1>{data.title}</h1>
				{contentToDisplay} */}
			</main>
			<PageCloseMenu />
			<Thumbnails />
		</>
	)
}
