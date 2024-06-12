import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'

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
				<FaAngleRight />
			</Link>
		) : (
			<Link
				href={
					currentSlugIndex < allSlugs.length - 1
						? `/${allSlugs[currentSlugIndex + 1]}`
						: `/${allSlugs[0]}`
				}
			>
				<FaAngleRight />
			</Link>
		)
	return swiper
}
