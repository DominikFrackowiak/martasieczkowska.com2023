'use client'

import { useSearchParams } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import SwipeRight from './SwipeRight'
import SwipeLeft from './SwipeLeft'
import styles from './PageSwipeCloseMenu.module.scss'

export default function PageSwipeCloseMenu({
	currentSlugIndex = 0,
	allSlugs = [],
}) {
	const searchParams = useSearchParams()

	const category = searchParams.get('category')
	const imageIndexQuery = searchParams.get('imageIndex')

	const contentToDisplay =
		imageIndexQuery === null ? (
			<div className={styles.pageSwipeCloseMenuWrapper}>
				<SwipeLeft
					category={category}
					currentSlugIndex={currentSlugIndex}
					allSlugs={allSlugs}
				/>

				<Link href='/'>
					<Image
						src='/assets/back-to-main-icon.png'
						height={30}
						width={30}
						alt='icon back to main'
					/>
				</Link>

				<SwipeRight
					category={category}
					currentSlugIndex={currentSlugIndex}
					allSlugs={allSlugs}
				/>
			</div>
		) : null

	return contentToDisplay
}
