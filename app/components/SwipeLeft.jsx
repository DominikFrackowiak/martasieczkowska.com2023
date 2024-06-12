import Link from 'next/link'
import { FaAngleLeft } from 'react-icons/fa6'
import styles from './PageSwipeCloseMenu.module.scss'

export default function SwipeLeft({ category, currentSlugIndex, allSlugs }) {
	const swiper =
		category !== undefined ? (
			<Link
				href={
					currentSlugIndex > 0
						? `/${allSlugs[currentSlugIndex - 1]}?category=${category}`
						: `/${allSlugs[allSlugs.length - 1]}?category=${category}`
				}
			>
				<FaAngleLeft className={styles.arrowIcon} />
			</Link>
		) : (
			<Link
				href={
					currentSlugIndex > 0
						? `/${allSlugs[currentSlugIndex - 1]}`
						: `/${allSlugs[allSlugs.length - 1]}`
				}
			>
				<FaAngleLeft className={styles.arrowIcon} />
			</Link>
		)
	return swiper
}
