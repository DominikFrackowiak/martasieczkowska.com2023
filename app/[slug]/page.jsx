import { Suspense } from 'react'
import { v4 as uuid } from 'uuid'
import parse from 'html-react-parser'

import getPost from '../../lib/getPost'
import getAllPosts from '../../lib/getAllPosts'
import getSlugsByCategory from '../../lib/getSlugsByCategory'
import getAllSlugs from '../../lib/getAllSlugs'
import handleDataToDisplayInGallery from '../../utils/handleDataToDisplayInGallery'

import Gallery from '../components/Gallery'
import Loading from '../loading'
import { notFound } from 'next/navigation'
import Header from '../components/Header'
import Thumbnails from '../components/Thumbnails'
import ArrowUp from '../components/ArrowUp'
import PageSwipeCloseMenu from '../components/PageSwipeCloseMenu'
import SwipeRight from '../components/SwipeRight'

import Link from 'next/link'

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

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
				>
					<SwipeRight
						category={searchParams.category}
						currentSlugIndex={currentSlugIndex}
						allSlugs={allSlugs}
					/>
					<Link href={`/`}>
						<p>-</p>
					</Link>
					<ArrowUp />
				</div>
				<PageSwipeCloseMenu />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Thumbnails category={searchParams.category} />
			</Suspense>
		</div>
	)
}
