// import { parse } from '@wordpress/block-serialization-default-parser'
import { v4 as uuid } from 'uuid'
import parse from 'html-react-parser'

import getPost from '../../lib/getPost'
import getAllPosts from '../../lib/getAllPosts'
import getAllPostsByCategory from '../../lib/getAllPostsByCategory'

import Gallery from '../components/Gallery'
import { notFound } from 'next/navigation'
import Navigation from '../components/Navigation'
import Thumbnails from '../components/Thumbnails'
import ArrowUp from '../components/ArrowUp'
import PageSwipeCloseMenu from '../components/PageSwipeCloseMenu'
import handleDataToDisplayInGallery from '../../utils/handleDataToDisplayInGallery'


import Link from 'next/link'

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export async function generateMetadata({ params }) {
	return {
		title: `Marta Sieczkowska | ${params.slug.replaceAll('-', ' ')}`,
		description: params.slug,
	}
}

export const revalidate = 60

export default async function SinglePage({ params, searchParams }) {
	
	const {heading, description, images} = await handleDataToDisplayInGallery(params)
 

	// console.log(heading)
	

	// if (searchParams.category === undefined) {
	// 	data = await getAllPosts()
	// } else {
	// 	data = await getAllPosts()

	// 	data = data.filter(el => el.acf.category.slug === searchParams.category)
	// }

	// const acFields = post[0].acf

	// function extractLargeImageURLs(obj) {
	// 	let images = []
	// 	for (let key in obj) {
	// 		if (obj.hasOwnProperty(key) && key.includes('large_image')) {
	// 			images.push(obj[key])
	// 		}
	// 	}

	// 	return images
	// }

	// const largeImages = extractLargeImageURLs(acFields)

	// const allSlugs = data.map(el => el.acf.slug)
	// const currentSlugIndex = allSlugs.indexOf(params.slug)

	 

	return (
		<div className='responsiveWrapper'>
			<Navigation searchParams={searchParams} />

			<Gallery
				images={images}
				headingInnerText={heading}
				postInnerText={description}
			/>
			{/*<div
				style={{
					display: 'flex',
					gap: '20px',
				}}
			>
				{searchParams.category && (
					<Link
						href={
							currentSlugIndex < allSlugs.length - 1
								? `/${allSlugs[currentSlugIndex + 1]}?category=${
										searchParams.category
								  }`
								: `/${allSlugs[0]}?category=${searchParams.category}`
						}
					>
						<p>+</p>
					</Link>
				)}
				{searchParams.category === undefined && (
					<Link
						href={
							currentSlugIndex < allSlugs.length - 1
								? `/${allSlugs[currentSlugIndex + 1]}`
								: `/${allSlugs[0]}`
						}
					>
						<p>+</p>
					</Link>
				)}
				<Link href={`/`}>
					<p>-</p>
				</Link>
				<ArrowUp />
			</div>
			<PageSwipeCloseMenu /> */}
			<Thumbnails category={searchParams.category} /> 
		</div>
	)
}

// export async function generateStaticParams() {
// 	const postsData = getAllPosts()
// 	const posts = await postsData



// 	return posts.map(post => ({ slug: post.acf.slug }))
// }
