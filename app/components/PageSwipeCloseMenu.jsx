'use client'

import Image from 'next/image'
import Link from 'next/link'

import SwipeRight from './SwipeRight'
import SwipeLeft from './SwipeLeft'
import styles from './PageSwipeCloseMenu.module.scss'





export default function PageSwipeCloseMenu({category, currentSlugIndex, allSlugs}) {
	return (
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
	)
}
