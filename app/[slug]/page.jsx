import { Suspense } from 'react'
import { v4 as uuid } from 'uuid'
import parse from 'html-react-parser'

import getSlugsByCategory from '../../lib/getSlugsByCategory'
import getAllSlugs from '../../lib/getAllSlugs'
import handleDataToDisplayInGallery from '../../utils/handleDataToDisplayInGallery'

import Gallery from '../components/Gallery'
import Loading from '../loading'

import Thumbnails from '../components/Thumbnails'
import ArrowUp from '../components/ArrowUp'
import PageSwipeCloseMenu from '../components/PageSwipeCloseMenu'

export async function generateStaticParams() {
	const data = await getAllSlugs()
	return data
}

export async function generateMetadata({ params }) {
	return {
		title: `Marta Sieczkowska | ${params.slug.replaceAll('-', ' ')}`,
		description: params.slug,
	}
}

export const revalidate = 60

export default async function SinglePage({ params, searchParams }) {
	const { heading, description, images } = await handleDataToDisplayInGallery(
		params
	)

	let allSlugs
	let data

	if (searchParams.category !== undefined) {
		data = await getSlugsByCategory(searchParams.category) 
	} else {
		data = await getAllSlugs()
	}

	allSlugs = data.reverse().map(el => el.slug)
	const currentSlugIndex = allSlugs.indexOf(params.slug)

	return (
		<div className='responsiveWrapper'>
			<Suspense fallback={<Loading />}>
				<Gallery
					images={images}
					headingInnerText={heading}
					postInnerText={description}
				/>
				<div
					style={{
						display: 'flex',
						gap: '20px',
					}}
				></div>
				<Suspense fallback={<Loading />}>
				<PageSwipeCloseMenu
					category={searchParams.category}
					currentSlugIndex={currentSlugIndex}
					allSlugs={allSlugs}
				/>
				</Suspense>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Thumbnails category={searchParams.category} />
			</Suspense>
		</div>
	)
}
