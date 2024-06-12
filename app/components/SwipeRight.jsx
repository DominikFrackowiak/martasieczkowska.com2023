import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import styles from './PageSwipeCloseMenu.module.scss'

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
				<FaAngleRight className={styles.arrowIcon} />
			</Link>
		) : (
			<Link
				href={
					currentSlugIndex < allSlugs.length - 1
						? `/${allSlugs[currentSlugIndex + 1]}`
						: `/${allSlugs[0]}`
				}
			>
				<FaAngleRight className={styles.arrowIcon} />
			</Link>
		)
	return swiper
}
