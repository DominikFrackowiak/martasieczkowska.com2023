import Link from 'next/link'

export default function SwipeRight({ category, currentSlugIndex, allSlugs }) {
	const swiper =
		category !== undefined ? (
			<Link
				href={
					currentSlugIndex < allSlugs?.length - 1
						? `/${allSlugs[currentSlugIndex + 1]}?category=${category}`
						: `/${allSlugs[0]}?category=${category}`
				}
			>
				<p>+</p>
			</Link>
		) : (
			<Link
				href={
					currentSlugIndex < allSlugs.length - 1
						? `/${allSlugs[currentSlugIndex + 1]}`
						: `/${allSlugs[0]}`
				}
			>
				<p>+</p>
			</Link>
		)
	return swiper
}
