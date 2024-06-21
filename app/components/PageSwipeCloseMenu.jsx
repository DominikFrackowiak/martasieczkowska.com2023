'use client'


import { useSearchParams } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'



import SwipeRight from './SwipeRight'
import SwipeLeft from './SwipeLeft'
import styles from './PageSwipeCloseMenu.module.scss'

export default function PageSwipeCloseMenu({
	// category,
	currentSlugIndex = 0,
	allSlugs = [],
	about,
}) {
	const searchParams = useSearchParams()

	const category = searchParams.get('category')
	const imageIndexQuery = searchParams.get('imageIndex')

	


		const contentToDisplay =  imageIndexQuery===null ? (<div className={styles.pageSwipeCloseMenuWrapper}>
			{about !== true &&  (
				<SwipeLeft
					category={category}
					currentSlugIndex={currentSlugIndex}
					allSlugs={allSlugs}
				/>
			)}
			<Link href='/'>
				<Image
					src='/assets/back-to-main-icon.png'
					height={30}
					width={30}
					alt='icon back to main'
				/>
			</Link>
			{about !== true &&  (
				<SwipeRight
					category={category}
					currentSlugIndex={currentSlugIndex}
					allSlugs={allSlugs}
				/>
			)}
		</div>) : null

		return contentToDisplay
	
}
