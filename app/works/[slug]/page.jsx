import { Suspense } from 'react'
import { v4 as uuid } from 'uuid'

import getSlugsByCategory from '../../../lib/getSlugsByCategory'
import getAllSlugs from '../../../lib/getAllSlugs'
import handleDataToDisplayInGallery from '../../../utils/handleDataToDisplayInGallery'

import Gallery from '../../components/Gallery'
import Loading from '../../loading'

import Thumbnails from '../../components/Thumbnails'

import PageSwipeCloseMenu from '../../components/PageSwipeCloseMenu'
import { redirect } from 'next/navigation'

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

export const revalidate = 3600

export default async function SinglePage({ params, searchParams }) {
	const { heading, description, images } = await handleDataToDisplayInGallery(
		params
	)

	if (heading === undefined) redirect('/')

	let allSlugs
	let data

	let category = searchParams.category
	let about = searchParams.about

	if (searchParams.category !== undefined) {
		data = await getSlugsByCategory(searchParams.category)
		allSlugs = data.map(el => el.slug)
	} else {
		data = await getAllSlugs()
		allSlugs = data.map(el => el.slug)
	}

	allSlugs = data.map(el => el.slug)

	const currentSlugIndex = allSlugs.reverse().indexOf(params.slug)

	const contentToDisplay = (
		<>
			<Suspense fallback={<Loading />}>
				<Gallery
					images={images}
					headingInnerText={heading}
					postInnerText={description}
					currentSlugIndex={currentSlugIndex}
					allSlugs={allSlugs}
				/>

				<PageSwipeCloseMenu
					currentSlugIndex={currentSlugIndex}
					category={category}
					allSlugs={allSlugs}
					about={about}
				/>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Thumbnails
					category={searchParams.category}
					isFullImageDisplayed={searchParams?.imageIndex}
				/>
			</Suspense>
		</>
	)

	return contentToDisplay
}
