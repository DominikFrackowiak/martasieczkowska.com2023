import { parse } from '@wordpress/block-serialization-default-parser'
// import getPost from '@/lib/getPost'
import getPost from '../../lib/getPost'
import getAllPosts from '../../lib/getAllPosts'
import Gallery from '../components/Gallery'
import { notFound } from 'next/navigation'
import Navigation from '../components/Navigation'
import Thumbnails from '../components/Thumbnails'

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

	return (
		<div className='responsiveWrapper'>
			<Navigation searchParams={searchParams}/>
			<h1>
				<div dangerouslySetInnerHTML={{ __html: title }}></div>
			</h1>

			<p>{p}</p>
			<Gallery figures={figure} />
			<Thumbnails />
		</div>
	)
}

export async function generateStaticParams() {
	const postsData = getAllPosts()
	const posts = await postsData

	return posts.map(post => ({ slug: post.slug }))
}
