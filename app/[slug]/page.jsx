import { parse } from '@wordpress/block-serialization-default-parser'

import getPost from '../../lib/getPost'
import getAllPosts from '../../lib/getAllPosts'
import getAllPostsByCategory from '../../lib/getAllPostsByCategory'

import Gallery from '../components/Gallery'
import { notFound } from 'next/navigation'
import Navigation from '../components/Navigation'
import Thumbnails from '../components/Thumbnails'
import ArrowUp from '../components/ArrowUp'

import Link from 'next/link'


export async function generateMetadata({ params }) {
	return {
		title: `Marta Sieczkowska | ${params.slug.replaceAll('-', ' ')}`,
		description: params.slug,
	}
}

export default async function SinglePage({ params, searchParams }) {
	const post = await getPost(params.slug)
	let html
	if (post.length) {
		html = post[0]?.content.rendered
	} else {
		return notFound()
	}

	let p
	let figure
	let title
	if (html) {
		p = parse(html)[0]
			.innerContent[0].split('\n')
			.filter(el => el !== '')
			.filter(el => el.includes('<p>'))[1]
			.replace(/<\/?p>/g, '')

		title = parse(html)[0]
			.innerContent[0].split('\n')
			.filter(el => el !== '')
			.filter(el => el.includes('<p>'))[0]
			.replace(/<\/?p>/g, '')

		figure = parse(html)[0]
			.innerContent[0].split('\n')
			.filter(el => el.includes('<figure'))

		figure.pop()
	}

	let data
	if (searchParams?.category === undefined) {
		data = await getAllPosts()
	} else if (searchParams?.category === 'graphic-design') {
		data = await getAllPostsByCategory('5')
	} else if (searchParams?.category === 'illustration') {
		data = await getAllPostsByCategory('3')
	}

	let dataContentArray = []

	for (let i = 0; i < data?.length; i++) {
		dataContentArray.push(data[i].content.rendered)
	}

	const figures = dataContentArray.map(el =>
		el
			.split('\n')
			.filter(el => el !== '')
			.pop()
	)

	let thumbnails = []

	if (Array.isArray(figures) && figures.length > 0) {
		thumbnails = figures
			.map(figure => {
				const srcMatch = figure.match(/src="([^"]+)"/)
				const widthMatch = figure.match(/width="(\d+)"/)
				const heightMatch = figure.match(/height="(\d+)"/)
				const altMatch = figure.match(/alt="([^"]*)"/)

				if (!srcMatch || !widthMatch || !heightMatch) return null

				const src = srcMatch[1]
				const width = parseInt(widthMatch[1], 10)
				const height = parseInt(heightMatch[1], 10)
				const alt = altMatch ? altMatch[1] : ''
				thumbnails
				return { src, width, height, alt }
			})
			.reverse()
			.filter(Boolean)
	}

	const allSlugs = thumbnails.map(thumbnail => thumbnail.alt)
	const currentSlugIndex = allSlugs.indexOf(params.slug)

	return (
		<div className='responsiveWrapper'>
			<Navigation searchParams={searchParams} />
			<h1>
				<div dangerouslySetInnerHTML={{ __html: title }}></div>
			</h1>

			<p>{p}</p>
			<Gallery figures={figure} />
			<div
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
			<Thumbnails category={searchParams.category} />
		</div>
	)
}

export async function generateStaticParams() {
	const postsData = getAllPosts()
	const posts = await postsData

	return posts.map(post => ({ slug: post.slug }))
}
